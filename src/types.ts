export interface IRecentTransaction {
	amount: number;
	user: {
		name: string;
		email: string;
		pic?: string;
	};
}

export interface IDataSummary {
	title: string;
	amount: string | number;
	caption: string;
}

export interface IApiData {
	recentTransactions: IRecentTransaction[];
	dataSummary: {
		revenue: IDataSummary;
		sub: IDataSummary;
		sales: IDataSummary;
		activeUsers: IDataSummary;
	};
	overViewChartData: { name: string; value: number }[];
}
