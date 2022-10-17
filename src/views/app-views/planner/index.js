import { Card, Col, List, Row, Tabs } from 'antd'
import { armchairs } from 'views/app-views/planner/data/armchairs';
import { sofas } from 'views/app-views/planner/data/sofas';
import { tables } from 'views/app-views/planner/data/tables';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import React from 'react'
import roomImage from '../../../assets/planner/room.jpg'


const Planner = () => {

	const { TabPane } = Tabs;

	return (
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
									<img src={item.img} alt="" />
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
									<img src={item.img} alt="" />
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
									<img src={item.img} alt="" />
								</List.Item>
								)}
							/>	
						</TabPane>
					</Tabs>
			</Card>
			</Col>
			<Col>
				<img src={roomImage} alt="room" />
			</Col>
		</Row>
	)
}

export default Planner