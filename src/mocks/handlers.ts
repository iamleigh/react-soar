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
			// 24 December
			{
				source: 'card',
				amount: -896,
				date: '2024-12-24',
				description: 'Wallmart payment'
			},
			{
				source: 'card',
				amount: -918,
				date: '2024-12-24',
				description: 'Target payment'
			},
			{
				source: 'transfer',
				amount: 780,
				date: '2024-12-24',
				description: 'Payment from Mick Jager'
			},
			// 25 December
			{
				source: 'card',
				amount: -320,
				date: '2024-12-25',
				description: 'Restaurant payment'
			},
			{
				source: 'transfer',
				amount: 5400,
				date: '2024-12-25',
				description: 'Payment from Jemi Wilson'
			},
			{
				source: 'card',
				amount: -534,
				date: '2024-12-25',
				description: 'Wallmart payment'
			},
			{
				source: 'paypal',
				amount: 2500,
				date: '2024-12-25',
				description: 'Deposit from PayPal'
			},
			{
				source: 'card',
				amount: -833,
				date: '2024-12-25',
				description: 'Restaurant payment'
			},
			// 26 December
			{
				source: 'card',
				amount: -850,
				date: '2024-12-26',
				description: 'ATM Withdrawal'
			},
			// 27 Decemeber
			{
				source: 'transfer',
				amount: 419,
				date: '2024-12-27',
				description: 'Payment from Louis Risso'
			},
			{
				source: 'card',
				amount: -2500,
				date: '2024-12-27',
				description: 'ATM Withdrawal'
			},
			{
				source: 'transfer',
				amount: 507,
				date: '2024-12-27',
				description: 'Payment from Jemi Wilson'
			},
			{
				source: 'transfer',
				amount: 790,
				date: '2024-12-27',
				description: 'Payment from Allan Rickman'
			},
			// 28 December
			{
				source: 'paypal',
				amount: 5621,
				date: '2024-12-28',
				description: 'Deposit from PayPal'
			},
			{
				source: 'transfer',
				amount: -1563,
				date: '2024-12-28',
				description: 'Payment to Mick Jacobs'
			},
			// 29 Decemeber
			{
				source: 'paypal',
				amount: 3963,
				date: '2024-12-29',
				description: 'Deposit from PayPal'
			},
			{
				source: 'card',
				amount: -1816,
				date: '2024-12-29',
				description: 'Restaurant payment'
			},
			{
				source: 'card',
				amount: -6238,
				date: '2024-12-29',
				description: 'Jewelry payment'
			},
			// 30 Decemeber
			{
				source: 'transfer',
				amount: -856,
				date: '2024-12-30',
				description: 'Payment to Allan Rickman'
			},
			{
				source: 'transfer',
				amount: -533,
				date: '2024-12-30',
				description: 'Payment to Jemi Wilson'
			},
			{
				source: 'card',
				amount: -48,
				date: '2024-12-30',
				description: 'Movie tickets payment'
			},
			{
				source: 'paypal',
				amount: 2354,
				date: '2024-12-30',
				description: 'Deposit from PayPal'
			},
		])
	}),
]
