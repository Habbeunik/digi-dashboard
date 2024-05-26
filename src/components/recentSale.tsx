import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { Avatar, Flex, Skeleton, Space } from 'antd';
import { IRecentTransaction } from '@/types';
import { formatMoney } from '@/lib/money';
import AvatarSkeleton from 'antd/lib/skeleton/Avatar';

interface IRecentSalesProps {
	sales?: IRecentTransaction[];
}
export default function RecentSales(props: IRecentSalesProps) {
	const { sales } = props;

	return (
		<div className="h-full">
			<Title level={3} style={{ marginBottom: 0 }}>
				Recent Sales
			</Title>
			<Paragraph className="opacity-60">
				You made 256 sales this month.
			</Paragraph>

			<Space className="mt-6 w-full" direction="vertical" size={35}>
				{sales ? (
					sales.map((sale) => (
						<SaleItem
							key={sale.user.email}
							name={sale.user.name}
							email={sale.user.email}
							pic={sale.user.pic}
							amount={`+${formatMoney(sale.amount)}`}
						/>
					))
				) : (
					<>
						<SaleItemLoading />
						<SaleItemLoading />
						<SaleItemLoading />
						<SaleItemLoading />
						<SaleItemLoading />
						<SaleItemLoading />
					</>
				)}
			</Space>
		</div>
	);
}

interface ISaleItemProps {
	name: string;
	email: string;
	amount: string;
	pic?: string;
}
function SaleItem(props: ISaleItemProps) {
	const { name, email, amount, pic } = props;
	return (
		<Flex className="w-full" align="center" justify="space-between">
			<Space>
				<Avatar src={pic} size={50} />
				<div>
					<Title style={{ marginBottom: 0 }} level={5}>
						{name}
					</Title>
					<Paragraph style={{ marginBottom: 0 }} className="opacity-60">
						{email}
					</Paragraph>
				</div>
			</Space>
			<Title level={4}>{amount}</Title>
		</Flex>
	);
}

const SaleItemLoading = () => {
	return (
		<Flex className="w-full" align="center">
			<AvatarSkeleton active size="large" />
			<div className="ml-5">
				<Skeleton
					active
					paragraph={false}
					style={{ width: '300px', marginBottom: '10px' }}
				/>
				<Skeleton active paragraph={false} style={{ width: '250px' }} />
			</div>
		</Flex>
	);
};
