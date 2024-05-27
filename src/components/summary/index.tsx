import { Row, Col, Skeleton } from 'antd';
import {
	MoneyCollectOutlined,
	UserSwitchOutlined,
	StrikethroughOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { IDataSummary } from '@/types';
import SummaryCard from './summaryCard';

const { Button: SkeletonNode } = Skeleton;

const skeletonProps = {
	active: true,
	className: 'summaryCardSkeleton',
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
		<Row gutter={[16, 16]} className="my-5">
			<Col span={24} md={12} lg={12} xl={6}>
				{data ? (
					<SummaryCard
						title={data.revenueSummary.title}
						figure={`${data.revenueSummary.amount}`}
						icon={<MoneyCollectOutlined className="summaryCardIcon" />}
						caption={data.revenueSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>

			<Col span={24} md={12} lg={12} xl={6}>
				{data ? (
					<SummaryCard
						title={data.subscriptionSummary.title}
						figure={`${data.subscriptionSummary.amount}`}
						icon={<UserSwitchOutlined className="summaryCardIcon" />}
						caption={data.subscriptionSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>

			<Col span={24} md={12} lg={12} xl={6}>
				{data ? (
					<SummaryCard
						title={data.salesSummary.title}
						figure={`${data.salesSummary.amount}`}
						icon={<StrikethroughOutlined className="summaryCardIcon" />}
						caption={data.salesSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>

			<Col span={24} md={12} lg={12} xl={6}>
				{data ? (
					<SummaryCard
						title={data.activeNowSummary.title}
						figure={`${data.activeNowSummary.amount}`}
						icon={<UserOutlined className="summaryCardIcon" />}
						caption={data.activeNowSummary.caption}
					/>
				) : (
					<SkeletonNode {...skeletonProps} />
				)}
			</Col>
		</Row>
	);
}
