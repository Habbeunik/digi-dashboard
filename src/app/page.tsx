import Header from '@/components/layout/header';
import {
	Button,
	Flex,
	Space,
	DatePicker,
	Segmented,
	Row,
	Col,
	Card,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import Summary from '@/components/summary';
import OverviewChart from '@/components/chart/overview';
import RecentSales from '@/components/recentSale';

export default function Home() {
	return (
		<>
			<Header />
			<main className="container mx-auto py-10">
				<Flex className="mb-8" align="center" justify="space-between">
					<Title style={{ margin: 0 }} className="m-0">
						Dashboard
					</Title>

					<Space>
						<DatePicker size="large" width={'200px'} placeholder="Start Date" />
						<DatePicker size="large" width={'200px'} placeholder="End Date" />
						<Button type="primary" size="large">
							Download
						</Button>
					</Space>
				</Flex>

				<Segmented
					size="large"
					options={['Overview', 'Analytics', 'Reports', 'Notification']}
				/>

				<Summary />

				<Row gutter={16}>
					<Col span={14}>
						<Card className="h-full">
							<OverviewChart />
						</Card>
					</Col>

					<Col span={10}>
						<Card>
							<RecentSales />
						</Card>
					</Col>
				</Row>
			</main>
		</>
	);
}
