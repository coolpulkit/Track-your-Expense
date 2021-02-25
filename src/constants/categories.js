const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Salary', amount: 0, color: incomeColors[0] },
  { type: 'Business', amount: 0, color: incomeColors[1] },
  { type: 'Rental Yields', amount: 0, color: incomeColors[2] },
  { type: 'Interests', amount: 0, color: incomeColors[3] },
  { type: 'Dividends', amount: 0, color: incomeColors[4] },
  { type: 'Capital Gains', amount: 0, color: incomeColors[5] },
  { type: 'Royalties', amount: 0, color: incomeColors[6] },
  { type: 'Annuities', amount: 0, color: incomeColors[7] },
  { type: 'Money Market Funds', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Food and Beverages', amount: 0, color: expenseColors[0] },
  { type: 'Transport', amount: 0, color: expenseColors[1] },
  { type: 'Housing', amount: 0, color: expenseColors[2] },
  { type: 'Clothing and Footwear', amount: 0, color: expenseColors[3] },
  { type: 'Energy', amount: 0, color: expenseColors[4] },
  { type: 'Health', amount: 0, color: expenseColors[5] },
  { type: 'House Rent', amount: 0, color: expenseColors[6] },
  { type: 'Personal Care', amount: 0, color: expenseColors[7] },
  { type: 'Financial Services', amount: 0, color: expenseColors[8] },
  { type: 'ICT', amount: 0, color: expenseColors[9] },
  { type: 'Others', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
