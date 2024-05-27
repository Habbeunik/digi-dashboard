'use client';

import { Typography } from 'antd';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { formatMoney } from '@/lib/money';

const { Title } = Typography;

interface IOverViewChartProps {
	data: { name: string; value: number }[];
}
export default function OverviewChart(props: IOverViewChartProps) {
	return (
		<div className="h-full">
			<Title level={3}>Overview</Title>

			<ResponsiveContainer className="mt-16" width={'100%'} height={480}>
				<BarChart className="w-full h-full" data={props.data} barGap={10}>
					<XAxis dataKey="name" axisLine={false} tickLine={false} />
					<YAxis
						axisLine={false}
						tickLine={false}
						tickFormatter={(value) => `${formatMoney(value)}`}
					/>
					<Bar dataKey="value" fill="black" radius={[8, 8, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
