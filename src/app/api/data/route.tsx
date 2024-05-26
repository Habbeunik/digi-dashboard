import { recentTransactions, dataSummary, overViewChartData } from './store';

export async function GET() {
	return new Response(
		JSON.stringify({
			message: 'Data fetched!',
			data: {
				recentTransactions,
				dataSummary,
				overViewChartData,
			},
		}),
		{
			status: 200,
		}
	);
}
