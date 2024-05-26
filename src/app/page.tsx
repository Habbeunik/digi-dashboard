'use client';

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
	Spin,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import Summary from '@/components/summary';
import OverviewChart from '@/components/chart/overview';
import RecentSales from '@/components/recentSale';
import { useEffect, useState } from 'react';
import { IApiData } from '@/types';

export default function Home() {
	const [data, setData] = useState<IApiData | null>(null);

	const summaryData = data
		? {
				revenueSummary: data?.dataSummary.revenue,
				salesSummary: data?.dataSummary.sales,
				subscriptionSummary: data?.dataSummary.sub,
				activeNowSummary: data?.dataSummary.activeUsers,
		  }
		: null;

	useEffect(() => {
		(async () => {
			const res = await fetch('/api/data');
			const resData = await res.json();

			setData(resData.data);
		})();
	}, []);

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

				<Summary data={summaryData} />

				<Row gutter={16}>
					<Col span={14}>
						<Card className="h-full">
							{data ? (
								<OverviewChart data={data.overViewChartData} />
							) : (
								<Flex
									align="center"
									justify="center"
									className="w-full min-h-64">
									<Spin size="large" />
								</Flex>
							)}
						</Card>
					</Col>

					<Col span={10}>
						<Card>
							<RecentSales sales={data?.recentTransactions} />
						</Card>
					</Col>
				</Row>
			</main>
		</>
	);
}
