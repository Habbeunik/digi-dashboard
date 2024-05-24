import Dropdown from 'antd/lib/dropdown/dropdown';
import Title from 'antd/lib/typography/Text';
import { Button, Avatar, Flex, Space, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Header() {
	return (
		<div className="py-3 border-b">
			<Flex justify="space-between" className="container mx-auto">
				<Flex>
					<Dropdown menu={{ items: [] }}>
						<Button
							style={{
								width: '220px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
							iconPosition="end"
							icon={<DownOutlined />}
							size="large">
							<Flex align="center">
								<Avatar
									size={22}
									style={{ backgroundColor: '#4c16ff' }}></Avatar>
								<span className="ml-2">Alicia Koch</span>
							</Flex>
						</Button>
					</Dropdown>

					<Space size={20} className="ml-7">
						<Title style={{ fontSize: '16px' }} className="m-0 font-normal">
							Overview
						</Title>
						<Title style={{ fontSize: '16px' }} className="m-0 font-normal ">
							Customers
						</Title>
						<Title style={{ fontSize: '16px' }} className="m-0 font-normal">
							Products
						</Title>
						<Title style={{ fontSize: '16px' }} className="m-0 font-normal">
							Settings
						</Title>
					</Space>
				</Flex>
				<Space size="large">
					<Input
						size="large"
						placeholder="Search..."
						style={{ width: '300px' }}
					/>
					<Avatar size={40} />
				</Space>
			</Flex>
		</div>
	);
}
