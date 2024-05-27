let money = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
});

export function formatMoney(amount: number) {
	return money.format(amount);
}
