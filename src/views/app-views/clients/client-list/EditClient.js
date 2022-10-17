import React, { Component } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'

export class EditClient extends Component {

	render() {
        const { client, onCloseEditClient, updateClient } = this.props;
        const { name, username, email, address } = client;
        const { city } = address;


		const onSubmit = () => {
			updateClient()
            onCloseEditClient()
		};

		return (
			<>
				<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                    <h2 style={{'fontSize': '2rem'}}>Edit Client</h2>
				</Flex>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{ 
								'name': name,
								'email': email,
								'username': username,
								'city': city,
							}
						}
						onFinish={onSubmit}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{ 
												required: true,
												type: 'email',
												message: 'Please enter a valid email!' 
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
                                <Row>
                                    <Col span={8}>
                                        <Button type="primary" htmlType="submit">
                                            Save Change
                                        </Button>
                                    </Col>
                                    <Col span={8}>
                                        <Button onClick={onCloseEditClient} htmlType="button" danger>
                                            Close
                                        </Button>
                                    </Col>
                                </Row>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		)
	}
}

export default EditClient
