import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { findDOMNode } from 'react-dom'
import roomImage from '../../../assets/planner/room.jpg'
import { plannerObjects } from './data/data'
import PlannerObject from './PlannerObject'

const PlannerRoom = ({ room, setRoom }) => {
    const styleRoom = {
        position: 'relative',
        width: '520px',
        height: '520px'
    }

    const image = useRef()

    const [, drop] = useDrop(() => ({
        accept: 'planner-object',
        drop: (item, monitor) => {
            const { left, top } = findDOMNode(image.current).getBoundingClientRect();
            const { x, y } = monitor.getSourceClientOffset();
            const delta = monitor.getDifferenceFromInitialOffset();
            const itemTop = y - top;
            const itemLeft = x - left;

            if (!item.isSet) {
                addObjectToRoom(item.id, itemTop, itemLeft)
            } else {
                moveObjectInRoom(itemTop, itemLeft, delta)
            }
        }
    }), [room])


    const addObjectToRoom = (id, top, left) => {
        const [plannerObject] = plannerObjects.filter((item) => item.id === id);

        setRoom((objectList) => [...objectList, { ...plannerObject, top, left, isSet: true }])
    }

    const moveObjectInRoom = (top, left, delta) => {
        const index = room.findIndex((item) => (
            Math.abs(item.top + item.left) === ((top - delta.y) + (left - delta.x))
        ))

        const updateRoom = room.map((obj, i) => {
            if (i === index) {
                const top = Math.abs(obj.top + delta.y);
                const left = Math.abs(obj.left + delta.x);
                return { ...obj, top, left }
            }
            return obj
        })

        setRoom([...updateRoom])
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={styleRoom} ref={drop}>
                <img 
                    ref={image} 
                    style={{
                        'position': 'absolute',
                        'zIndex': '-1'
                    }} 
                    src={roomImage} 
                    alt="room" 
                />
                {room.map((obj, index) => (
                    <PlannerObject 
                        key={index} 
                        id={obj.id} 
                        img={obj.img} 
                        top={obj.top} 
                        left={obj.left} 
                        isSet={obj.isSet}
                    />
                ))}
            </div>
        </div>
    )
}

export default PlannerRoom