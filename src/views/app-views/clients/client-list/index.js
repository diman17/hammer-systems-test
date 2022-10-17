import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { fetchClients } from 'redux/asyncActions/Clients';
import Loading from 'components/shared-components/Loading';
import { deleteClient } from 'redux/actions/Clients';

export class ClientList extends Component {

	componentDidMount() {
		this.props.getClients();
	}

	deleteClient = client => {
		this.props.deleteClient(client.id)
		message.success({ content: `Deleted client ${client.name}`, duration: 2 });
	}

	render() {
		const { clients, isLoading } = this.props;

		const tableColumns = [
			{
				title: 'Client',
				dataIndex: 'name',
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'UserName',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => {
						a = a.username.toLowerCase();
  						b = b.username.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Email',
				dataIndex: 'email',
				sorter: {
					compare: (a, b) => {
						a = a.email.toLowerCase();
  						b = b.email.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'City',
				dataIndex: 'city',
				render: (_, elm) => (
					<span>{elm.address.city}</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase();
  						b = b.company.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={(event)=> {
								event.stopPropagation();
								this.deleteClient(elm)
								}
							} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];

		if(isLoading) {
			return (
				<Loading cover='content' />
			)
		}
		return (
			<Card onClick={() => console.log('navigate to Edit Profile')} bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={clients} rowKey='id' />
			</Card>
		)
	}
}

const mapStateToProps = (state) => ({
	isLoading: state.clients.isLoading,	
	clients: state.clients.clients,	
})

const mapDispatchToProps = (dispatch) => ({
	getClients() {
	dispatch(fetchClients());
	},
	deleteClient(id) {
		dispatch(deleteClient(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientList)
