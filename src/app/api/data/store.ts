import { IDataSummary, IRecentTransaction } from '@/types';

export const recentTransactions: IRecentTransaction[] = [
	{
		user: {
			name: 'Abbey Kumapayi',
			email: 'habbeyunik@gmail.com',
			pic: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
		},
		amount: 2000,
	},
	{
		user: {
			name: 'Terry Apala',
			email: 'terry.apala@gmail.com',
			pic: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
		},
		amount: 6500,
	},
	{
		user: {
			name: 'Adam Sandler',
			email: 'adam.sandler@yahoo.com',
			pic: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
		},
		amount: 780,
	},
	{
		user: {
			name: 'Jane Bethman',
			email: 'jane.bethman@gmail.com',
			pic: 'https://api.dicebear.com/7.x/miniavs/svg?seed=4',
		},
		amount: 50,
	},
	{
		user: {
			name: 'Daniel Glover',
			email: 'danelGlover9303@yahoo.com',
			pic: 'https://api.dicebear.com/7.x/miniavs/svg?seed=5',
		},
		amount: 1000,
	},
];

export const dataSummary: { [key: string]: IDataSummary } = {
	revenue: {
		title: 'Total Revenue',
		amount: '$35,000',
		caption: '+10% from last month',
	},
	sub: {
		title: 'Subscription',
		amount: '+$1,500',
		caption: '+6% from last month',
	},
	sales: {
		title: 'Sales',
		amount: '+345',
		caption: '+6% from last month',
	},
	activeUsers: {
		title: 'Active Now',
		amount: 114,
		caption: '+20 from last hour',
	},
};

export const overViewChartData = [
	{ name: 'Jan', value: 3700 },
	{ name: 'Feb', value: 6000 },
	{ name: 'Mar', value: 1800 },
	{ name: 'Apr', value: 3300 },
	{ name: 'May', value: 3500 },
	{ name: 'Jun', value: 2000 },
	{ name: 'Jul', value: 2800 },
	{ name: 'Aug', value: 2000 },
	{ name: 'Sep', value: 4500 },
	{ name: 'Oct', value: 4500 },
	{ name: 'Nov', value: 1500 },
	{ name: 'Dec', value: 1200 },
];
