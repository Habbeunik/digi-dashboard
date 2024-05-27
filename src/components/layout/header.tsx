import { Button, Avatar, Flex, Space, Input, Dropdown, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function Header() {
	return (
		<div className="py-3 border-b">
			<Flex justify="space-between" className="container mx-auto">
				<Flex>
					<Dropdown
						menu={{
							items: [{ label: 'Alicia Koch', type: 'item', key: 'alice' }],
						}}>
						<Button
							className="w-72 flex justify-between items-center"
							iconPosition="end"
							icon={<DownOutlined />}
							size="large">
							<Flex align="center">
								<Avatar size={22}></Avatar>
								<span className="ml-2">Alicia Koch</span>
							</Flex>
						</Button>
					</Dropdown>

					<Space size={35} className="ml-9">
						<Title className="m-0 font-normal navItem navItem--active">
							Overview
						</Title>
						<Title className="m-0 font-normal navItem">Customers</Title>
						<Title className="m-0 font-normal navItem">Products</Title>
						<Title className="m-0 font-normal navItem">Settings</Title>
					</Space>
				</Flex>

				<Space size="large">
					<Input size="large" placeholder="Search..." className="searchInput" />
					<Avatar size={40} />
				</Space>
			</Flex>
		</div>
	);
}
