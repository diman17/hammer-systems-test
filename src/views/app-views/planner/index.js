import { Card, Col, List, Row, Tabs } from 'antd'
import { ROW_GUTTER } from 'constants/ThemeConstant';
import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { plannerObjectType } from './data/constants';
import { plannerObjects } from './data/data';
import PlannerObject from './PlannerObject';
import PlannerRoom from './PlannerRoom';


const Planner = () => {
	const { TabPane } = Tabs;

	const armchairs = plannerObjects.filter((item) => item.type === plannerObjectType.ARMCHAIR)
	const sofas = plannerObjects.filter((item) => item.type === plannerObjectType.SOFA)
	const tables = plannerObjects.filter((item) => item.type === plannerObjectType.TABLE)

	return (
		<DndProvider backend={HTML5Backend}>
			<Row gutter={ROW_GUTTER} wrap={true} justify='space-between'>
				<Col flex='500px'>
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
							<TabPane tab="sofas" key="2">
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
							<TabPane tab="tables" key="3">
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
				</Col>
				<Col>
					<PlannerRoom />
				</Col>
			</Row>
		</DndProvider>
	)
}

export default Planner