import { Row, Col, Skeleton } from 'antd';
import SkeletonNode from 'antd/lib/skeleton/Button';
import SummaryCard from './summaryCard';
import {
	MoneyCollectOutlined,
	UserSwitchOutlined,
	StrikethroughOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { IDataSummary } from '@/types';

const iconStyle = { fontSize: '25px', opacity: 0.6 };
const skeletonProps = {
	active: true,
	style: { width: '370px', height: '124px', borderRadius: '8px' },
};

interface ISummaryProps {
	data: {
		revenueSummary: IDataSummary;
		subscriptionSummary: IDataSummary;
		salesSummary: IDataSummary;
		activeNowSummary: IDataSummary;
	} | null;
}
export default function Summary(props: ISummaryProps) {
	const { data } = props;

	return (
		<Row gutter={16} className="my-10">
			<Col span={6}>
				{data ? (
					<SummaryCard
						title={data.revenueSummary.title}
						figure={`${data.revenueSummary.amount}`}
						icon={<MoneyCollectOutlined style={iconStyle} />}
						caption={data.revenueSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>

			<Col span={6}>
				{data ? (
					<SummaryCard
						title={data.subscriptionSummary.title}
						figure={`${data.subscriptionSummary.amount}`}
						icon={<UserSwitchOutlined style={iconStyle} />}
						caption={data.subscriptionSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>

			<Col span={6}>
				{data ? (
					<SummaryCard
						title={data.salesSummary.title}
						figure={`${data.salesSummary.amount}`}
						icon={<StrikethroughOutlined style={iconStyle} />}
						caption={data.salesSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>

			<Col span={6}>
				{data ? (
					<SummaryCard
						title={data.activeNowSummary.title}
						figure={`${data.activeNowSummary.amount}`}
						icon={<UserOutlined style={iconStyle} />}
						caption={data.activeNowSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>
		</Row>
	);
}
