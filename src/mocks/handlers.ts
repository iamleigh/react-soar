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
			// June 2024
			{ source: "paypal", amount: -185, date: "2024-06-01", description: "Water Service", category: "bill" },
			{ source: "paypal", amount: -1172, date: "2024-06-01", description: "Amazon.com", category: "other" },
			{ source: "bank", amount: 1371, date: "2024-06-01", description: "Salary", category: "income" },
			{ source: "paypal", amount: 229, date: "2024-06-01", description: "Payment from Livia Beator", category: "income" },
			{ source: "bank", amount: 1313, date: "2024-06-02", description: "Payment from Randy Press", category: "income" },
			{ source: "paypal", amount: -234, date: "2024-06-02", description: "Booking.com", category: "entertainment" },
			{ source: "transfer", amount: -1227, date: "2024-06-02", description: "Payment to Bruce Wayne", category: "other" },
			{ source: "paypal", amount: 163, date: "2024-06-02", description: "Payment from Bill Johnson", category: "income" },
			{ source: "bank", amount: 219, date: "2024-06-03", description: "Payment from Alice James", category: "income" },
			{ source: "card", amount: -1351, date: "2024-06-13", description: "Rent", category: "bill" },
			{ source: "paypal", amount: -1021, date: "2024-06-13", description: "Groceries", category: "other" },
			{ source: "paypal", amount: -1941, date: "2024-06-13", description: "Target", category: "other" },
			{ source: "card", amount: -923, date: "2024-06-13", description: "Dining Out", category: "entertainment" },
			{ source: "card", amount: -1439, date: "2024-06-15", description: "Crypto Purchase", category: "investment" },

			// July 2024
			{ source: "card", amount: -250, date: "2024-07-01", description: "Utilities", category: "bill" },
			{ source: "paypal", amount: -100, date: "2024-07-01", description: "Subscription", category: "other" },
			{ source: "transfer", amount: 4500, date: "2024-07-02", description: "Project Bonus", category: "income" },
			{ source: "card", amount: -90, date: "2024-07-03", description: "Lunch", category: "other" },

			// December 2024
			{ source: 'card', amount: -1259, date: '2024-12-01', description: 'Cleaning service', category: 'bill' },
			{ source: 'card', amount: -625, date: '2024-12-08', description: 'Internet payment', category: 'bill' },
			{ source: 'card', amount: -183, date: '2024-12-12', description: 'Gasoline payment', category: 'bill' },
			{ source: 'card', amount: -216, date: '2024-12-12', description: 'Gasoline payment', category: 'bill' },
			{ source: 'card', amount: -356, date: '2024-12-16', description: 'Gasoline payment', category: 'bill' },
			{ source: 'card', amount: -152, date: '2024-12-20', description: 'Gasoline payment', category: 'bill' },
			{ source: 'card', amount: -374, date: '2024-12-23', description: 'Light service payment', category: 'bill' },
			{ source: 'card', amount: -162, date: '2024-12-23', description: 'Water service payment', category: 'bill' },
			{ source: 'card', amount: -64, date: '2024-12-23', description: 'Gasoline payment', category: 'bill' },
			{ source: 'card', amount: -896, date: '2024-12-24', description: 'Wallmart payment', category: 'other' },
			{ source: 'card', amount: -918, date: '2024-12-24', description: 'Target payment', category: 'other' },
			{ source: 'transfer', amount: 780, date: '2024-12-24', description: 'Payment from Mick Jager', category: 'income' },
			{ source: 'card', amount: -320, date: '2024-12-25', description: 'Restaurant payment', category: 'entertainment' },
			{ source: 'transfer', amount: 5400, date: '2024-12-25', description: 'Payment from Jemi Wilson', category: 'income' },
			{ source: 'card', amount: -534, date: '2024-12-25', description: 'Wallmart payment', category: 'other' },
			{ source: 'paypal', amount: 2500, date: '2024-12-25', description: 'Deposit from PayPal', category: 'income' },
			{ source: 'card', amount: -833, date: '2024-12-25', description: 'Restaurant payment', category: 'entertainment' },
			{ source: 'card', amount: -850, date: '2024-12-26', description: 'ATM Withdrawal', category: 'other' },
			{ source: 'transfer', amount: 419, date: '2024-12-27', description: 'Payment from Louis Risso', category: 'income' },
			{ source: 'card', amount: -2500, date: '2024-12-27', description: 'Bitcoins', category: 'investment' },
			{ source: 'transfer', amount: 507, date: '2024-12-27', description: 'Payment from Jemi Wilson', category: 'income' },
			{ source: 'transfer', amount: 790, date: '2024-12-27', description: 'Payment from Allan Rickman', category: 'income' },
			{ source: 'paypal', amount: 5621, date: '2024-12-28', description: 'Deposit from PayPal', category: 'income' },
			{ source: 'transfer', amount: -1563, date: '2024-12-28', description: 'Payment to Mick Jacobs', category: 'other' },
			{ source: 'paypal', amount: 3963, date: '2024-12-29', description: 'Deposit from PayPal', category: 'income' },
			{ source: 'card', amount: -1816, date: '2024-12-29', description: 'Restaurant payment', category: 'entertainment' },
			{ source: 'card', amount: -6238, date: '2024-12-29', description: 'Jewelry payment', category: 'investment' },
			{ source: 'transfer', amount: -856, date: '2024-12-30', description: 'Payment to Allan Rickman', category: 'other' },
			{ source: 'transfer', amount: -533, date: '2024-12-30', description: 'Payment to Jemi Wilson', category: 'other' },
			{ source: 'card', amount: -48, date: '2024-12-30', description: 'Movie tickets payment', category: 'entertainment' },
			{ source: 'paypal', amount: 2354, date: '2024-12-30', description: 'Deposit from PayPal', category: 'income' },
			{ source: 'card', amount: -663, date: '2024-12-31', description: 'Groceries', category: 'other' },
			{ source: 'transfer', amount: -972, date: '2024-12-31', description: 'Dinner', category: 'entertainment' },

			// January 2025
			{ source: 'bank', amount: -134, date: '2025-01-01', description: 'Water Service', category: 'bill' },
			{ source: 'bank', amount: -253, date: '2025-01-01', description: 'Light Service', category: 'bill' },
			{ source: 'transfer', amount: -261, date: '2025-01-01', description: 'Internet Service', category: 'bill' },
			{ source: 'transfer', amount: 3492, date: '2025-01-02', description: 'Salary', category: 'income' },
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
	}),

	// Mock endpoint for saved contacts
	http.get( '/api/contacts', () => {
		return HttpResponse.json([
			{
				name: 'Livia Bator',
				role: 'CEO',
				image: 'https://i.pravatar.cc/300'
			},
			{
				name: 'Randy Press',
				role: 'Director',
				image: 'https://i.pravatar.cc/300'
			},
			{
				name: 'Workman',
				role: 'Designer',
				image: 'https://i.pravatar.cc/300'
			},
			{
				name: 'Workman',
				role: 'Designer',
				image: 'https://i.pravatar.cc/300'
			},
			{
				name: 'Workman',
				role: 'Designer',
				image: 'https://i.pravatar.cc/300'
			}
		])
	})
]
