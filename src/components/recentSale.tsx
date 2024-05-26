import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { Avatar, Flex, Space } from 'antd';

export default function RecentSales() {
	return (
		<div className="h-full">
			<Title level={3} style={{ marginBottom: 0 }}>
				Recent Sales
			</Title>
			<Paragraph className="opacity-60">
				You made 256 sales this month.
			</Paragraph>

			<Space className="mt-6 w-full" direction="vertical" size={35}>
				<SaleItem />
				<SaleItem />
				<SaleItem />
				<SaleItem />
				<SaleItem />
				<SaleItem />
			</Space>
		</div>
	);
}

function SaleItem() {
	return (
		<Flex className="w-full" align="center" justify="space-between">
			<Space>
				<Avatar size={50} />
				<div>
					<Title style={{ marginBottom: 0 }} level={5}>
						Olivier Martin
					</Title>
					<Paragraph style={{ marginBottom: 0 }} className="opacity-60">
						olivier.martin@gmail.com
					</Paragraph>
				</div>
			</Space>
			<Title level={4}>+$1,990.00</Title>
		</Flex>
	);
}
