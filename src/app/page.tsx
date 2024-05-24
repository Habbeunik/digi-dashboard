import Header from '@/components/layout/header';
import Title from 'antd/lib/typography/Title';

export default function Home() {
	return (
		<>
			<Header />
			<main className="container mx-auto">
				<Title>Dashboard</Title>
			</main>
		</>
	);
}
