import { Row, Col } from 'antd';
import SummaryCard from './summaryCard';
import { UserOutlined } from '@ant-design/icons';

const iconStyle = { fontSize: '25px', opacity: 0.6 };

export default function Summary() {
	return (
		<Row gutter={16} className="my-10">
			<Col span={6}>
				<SummaryCard
					title="Total Revenue"
					figure="$45,31.39"
					icon={<UserOutlined style={iconStyle} />}
					caption="+20.1% from last month"
				/>
			</Col>

			<Col span={6}>
				<SummaryCard
					title="Subscriptions"
					figure="$2,350"
					icon={<UserOutlined style={iconStyle} />}
					caption="+180.1% from last month"
				/>
			</Col>

			<Col span={6}>
				<SummaryCard
					title="Sales"
					figure="$12,234"
					icon={<UserOutlined style={iconStyle} />}
					caption="+19% from last month"
				/>
			</Col>

			<Col span={6}>
				<SummaryCard
					title="Active Now"
					figure="$573"
					icon={<UserOutlined style={iconStyle} />}
					caption="+201 since last hour"
				/>
			</Col>
		</Row>
	);
}
