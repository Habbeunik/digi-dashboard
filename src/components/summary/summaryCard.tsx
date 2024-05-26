import { Card, Flex } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { ReactNode } from 'react';

interface ISummaryCardProps {
	title: string;
	figure: string;
	icon: ReactNode;
	caption: string;
}

export default function SummaryCard(props: ISummaryCardProps) {
	const { title, figure, icon, caption } = props;

	return (
		<Card>
			<Flex justify="space-between">
				<Title level={5}>{title}</Title>
				{icon}
			</Flex>

			<Title style={{ margin: 0 }} level={1}>
				{figure}
			</Title>
			<Text className="opacity-60">{caption}</Text>
		</Card>
	);
}
