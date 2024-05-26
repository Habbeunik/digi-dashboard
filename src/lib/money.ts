let money = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export function formatMoney(amount: number) {
	return money.format(amount);
}
