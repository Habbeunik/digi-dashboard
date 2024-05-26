'use client';

import Title from 'antd/lib/typography/Title';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'Jan', uv: 3700, pv: 2400, amt: 2400 },
	{ name: 'Feb', uv: 6000, pv: 2400, amt: 2400 },
	{ name: 'Mar', uv: 1800, pv: 2400, amt: 2400 },
	{ name: 'Apr', uv: 3300, pv: 2400, amt: 2400 },
	{ name: 'May', uv: 3500, pv: 2400, amt: 2400 },
	{ name: 'Jun', uv: 2000, pv: 2400, amt: 2400 },
	{ name: 'Jul', uv: 2800, pv: 2400, amt: 2400 },
	{ name: 'Aug', uv: 2000, pv: 2400, amt: 2400 },
	{ name: 'Sep', uv: 4500, pv: 2400, amt: 2400 },
	{ name: 'Oct', uv: 4500, pv: 2400, amt: 2400 },
	{ name: 'Nov', uv: 1500, pv: 2400, amt: 2400 },
	{ name: 'Dec', uv: 1200, pv: 2400, amt: 2400 },
];
// const renderCustomAxisTick = ({ x, y, payload }: any) => {
// 	return <p>{payload.value}</p>;
// };

export default function OverviewChart() {
	return (
		<div className="h-full" style={{ marginBottom: '-20px' }}>
			<Title level={3}>Overview</Title>
			<ResponsiveContainer className="mt-16" width={'100%'} height={480}>
				<BarChart className="w-full h-full" data={data} barGap={10}>
					<XAxis dataKey="name" axisLine={false} tickLine={false} />
					<YAxis axisLine={false} tickLine={false} />
					<Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
