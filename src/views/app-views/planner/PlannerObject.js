import React from 'react'
import { useDrag } from 'react-dnd'

const PlannerObject = ({ id, img, top, left, isSet }) => {
  const styleObject = {
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`,
  };

  const [, drag] = useDrag(() => ({
    type: 'planner-object',
    item: { id, isSet},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  }));

  return (
      <img style={styleObject} ref={drag} src={img} alt="" />
  )
}

export default PlannerObject