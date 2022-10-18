import { Button, Card, Col, List, message, Row, Space, Tabs, Upload } from 'antd'
import { ROW_GUTTER } from 'constants/ThemeConstant';
import React, { useState } from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { plannerObjectType } from './data/constants';
import { plannerObjects } from './data/data';
import PlannerObject from './PlannerObject';
import PlannerRoom from './PlannerRoom';


const Planner = () => {
	const [room, setRoom] = useState([])

	const { TabPane } = Tabs;

	const armchairs = plannerObjects.filter((item) => item.type === plannerObjectType.ARMCHAIR)
	const sofas = plannerObjects.filter((item) => item.type === plannerObjectType.SOFA)
	const tables = plannerObjects.filter((item) => item.type === plannerObjectType.TABLE)

	const onSaveArrangement = () => {
		const string = JSON.stringify(room)
		const blob = new Blob([string], {type: "text/plain"})
		const link = document.createElement("a");
		link.setAttribute("href", URL.createObjectURL(blob));
		link.setAttribute("download", "arrangement.txt");
		link.click();
	}

	const uploadProps = {
		name: 'file',
		customRequest({ onSuccess }) {
			setTimeout(() => {
				onSuccess("ok");
			}, 200);
		},
		onChange(info) {
			if (info.file.status === 'done') {
				message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}

			const reader = new FileReader();
			reader.readAsText(info.file.originFileObj)
			reader.onload = (event) => {
				setRoom([...JSON.parse(event.target.result)])
			}
		},
		
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<Row gutter={ROW_GUTTER} wrap={true} justify={'center'}>
				<Col xs={24} sm={24} md={16} lg={16} xl={12} xxl={12}>
					<Card>
						<Tabs defaultActiveKey="1">
							<TabPane tab="Armchairs" key="1">
								<List
									itemLayout="vertical"
									grid={{gutter: ROW_GUTTER}}
									dataSource={armchairs}
									renderItem={(item) => (
									<List.Item>
										<div style={{position: 'relative', width: `${item.width}px`, height: `${item.height}px`}}>
											<PlannerObject id={item.id} img={item.img} top={0} left={0} />
										</div>
									</List.Item>
									)}
								/>	
							</TabPane>
							<TabPane tab="Sofas" key="2">
								<List
									itemLayout="vertical"
									grid={{gutter: ROW_GUTTER}}
									dataSource={sofas}
									renderItem={(item) => (
									<List.Item>
										<div style={{position: 'relative', width: `${item.width}px`, height: `${item.height}px`}}>
											<PlannerObject id={item.id} img={item.img} top={0} left={0}/>
										</div>
									</List.Item>
									)}
								/>	
							</TabPane>
							<TabPane tab="Tables" key="3">
								<List
									itemLayout="vertical"
									grid={{gutter: ROW_GUTTER}}
									dataSource={tables}
									renderItem={(item) => (
									<List.Item>
										<div style={{position: 'relative', width: `${item.width}px`, height: `${item.height}px`}}>
											<PlannerObject id={item.id} img={item.img} top={0} left={0}/>
										</div>
									</List.Item>
									)}
								/>	
							</TabPane>
						</Tabs>
					</Card>
					<Card>
						<Space size={50}>
							<Button onClick={onSaveArrangement} type='primary'>
								Save arrangement
							</Button>
							<Upload {...uploadProps} showUploadList={false}>
								<Button type='primary' ghost>
									Load arrangement
								</Button>
							</Upload>
						</Space>
					</Card>
				</Col>
				<Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
					<PlannerRoom room={room} setRoom={setRoom} />
				</Col>
			</Row>
		</DndProvider>
	)
}

export default Planner