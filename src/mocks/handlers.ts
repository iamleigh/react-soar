import { http, HttpResponse } from 'msw'

export const handlers = [
	// Mock endpoint for user information
	http.get( '/api/user', () => {
		return HttpResponse.json({
			id: 1,
			name: 'Charlene Reed',
			email: 'charlenereed@gmail.com',
			username: 'Charlene Reed',
			password: '1234567890@',
			birthday: '',
			address: {
				present: 'San Jose, California, USA',
				permanent: 'San Jose, California, USA'
			},
			city: 'San Jose',
			zip: '45962',
			country: 'USA'
		})
	}),

	// Mock endpoint for user cards
	http.get( '/api/card', () => {
		return HttpResponse.json([
			{
				name: 'Eddy Cusuma',
				number: 3778000098761234,
				balance: 5756,
				expiration: '2022-12',
				light: false
			},
			{
				name: 'Eddy Cusuma',
				number: 3778000098761234,
				balance: 5756,
				expiration: '2022-12',
				light: true
			}
		])
	}),

	// Mock endpoint for transactions
	http.get( '/api/transactions', () => {
		return HttpResponse.json([
			// 2 December
			{
				source: 'card',
				amount: -1259,
				date: '2024-12-1',
				description: 'Cleaning service',
				category: 'bill'
			},
			// 8 December
			{
				source: 'card',
				amount: -625,
				date: '2024-12-8',
				description: 'Internet payment',
				category: 'bill'
			},
			// 12 December
			{
				source: 'card',
				amount: -183,
				date: '2024-12-12',
				description: 'Gasoline payment',
				category: 'bill'
			},
			{
				source: 'card',
				amount: -216,
				date: '2024-12-12',
				description: 'Gasoline payment',
				category: 'bill'
			},
			// 16 December
			{
				source: 'card',
				amount: -356,
				date: '2024-12-16',
				description: 'Gasoline payment',
				category: 'bill'
			},
			// 20 December
			{
				source: 'card',
				amount: -152,
				date: '2024-12-20',
				description: 'Gasoline payment',
				category: 'bill'
			},
			// 23 December
			{
				source: 'card',
				amount: -374,
				date: '2024-12-23',
				description: 'Light service payment',
				category: 'bill'
			},
			{
				source: 'card',
				amount: -162,
				date: '2024-12-23',
				description: 'Water service payment',
				category: 'bill'
			},
			{
				source: 'card',
				amount: -64,
				date: '2024-12-23',
				description: 'Gasoline payment',
				category: 'bill'
			},
			// 24 December
			{
				source: 'card',
				amount: -896,
				date: '2024-12-24',
				description: 'Wallmart payment',
				category: 'other'
			},
			{
				source: 'card',
				amount: -918,
				date: '2024-12-24',
				description: 'Target payment',
				category: 'other'
			},
			{
				source: 'transfer',
				amount: 780,
				date: '2024-12-24',
				description: 'Payment from Mick Jager',
				category: 'income'
			},
			// 25 December
			{
				source: 'card',
				amount: -320,
				date: '2024-12-25',
				description: 'Restaurant payment',
				category: 'entertainment'
			},
			{
				source: 'transfer',
				amount: 5400,
				date: '2024-12-25',
				description: 'Payment from Jemi Wilson',
				category: 'income'
			},
			{
				source: 'card',
				amount: -534,
				date: '2024-12-25',
				description: 'Wallmart payment',
				category: 'other'
			},
			{
				source: 'paypal',
				amount: 2500,
				date: '2024-12-25',
				description: 'Deposit from PayPal',
				category: 'income'
			},
			{
				source: 'card',
				amount: -833,
				date: '2024-12-25',
				description: 'Restaurant payment',
				category: 'entertainment'
			},
			// 26 December
			{
				source: 'card',
				amount: -850,
				date: '2024-12-26',
				description: 'ATM Withdrawal',
				category: 'other'
			},
			// 27 Decemeber
			{
				source: 'transfer',
				amount: 419,
				date: '2024-12-27',
				description: 'Payment from Louis Risso',
				category: 'income'
			},
			{
				source: 'card',
				amount: -2500,
				date: '2024-12-27',
				description: 'Bitcoins',
				category: 'investment'
			},
			{
				source: 'transfer',
				amount: 507,
				date: '2024-12-27',
				description: 'Payment from Jemi Wilson',
				category: 'income'
			},
			{
				source: 'transfer',
				amount: 790,
				date: '2024-12-27',
				description: 'Payment from Allan Rickman',
				category: 'income'
			},
			// 28 December
			{
				source: 'paypal',
				amount: 5621,
				date: '2024-12-28',
				description: 'Deposit from PayPal',
				category: 'income'
			},
			{
				source: 'transfer',
				amount: -1563,
				date: '2024-12-28',
				description: 'Payment to Mick Jacobs',
				category: 'other'
			},
			// 29 Decemeber
			{
				source: 'paypal',
				amount: 3963,
				date: '2024-12-29',
				description: 'Deposit from PayPal',
				category: 'income'
			},
			{
				source: 'card',
				amount: -1816,
				date: '2024-12-29',
				description: 'Restaurant payment',
				category: 'entertainment'
			},
			{
				source: 'card',
				amount: -6238,
				date: '2024-12-29',
				description: 'Jewelry payment',
				category: 'investment'
			},
			// 30 Decemeber
			{
				source: 'transfer',
				amount: -856,
				date: '2024-12-30',
				description: 'Payment to Allan Rickman',
				category: 'other'
			},
			{
				source: 'transfer',
				amount: -533,
				date: '2024-12-30',
				description: 'Payment to Jemi Wilson',
				category: 'other'
			},
			{
				source: 'card',
				amount: -48,
				date: '2024-12-30',
				description: 'Movie tickets payment',
				category: 'entertainment'
			},
			{
				source: 'paypal',
				amount: 2354,
				date: '2024-12-30',
				description: 'Deposit from PayPal',
				category: 'income'
			},
		])
	}),

	// Mock endpoint for categories
	http.get( '/api/categories', () => {
		return HttpResponse.json([
			{
				id: 'bill',
				label: 'Bill Expense'
			},
			{
				id: 'entertainment',
				label: 'Entertainment'
			},
			{
				id: 'income',
				label: 'Incomes'
			},
			{
				id: 'investment',
				label: 'Investment'
			},
			{
				id: 'other',
				label: 'Others'
			},
		])
	})
]
