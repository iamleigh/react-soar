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
			{
				source: 'card',
				amount: -320,
				date: '2021-01-21',
				description: 'Jewelry payment'
			},
			{
				source: 'paypal',
				amount: 1300,
				date: '2021-01-21',
				description: 'Allan Rickman'
			},
			{
				source: 'transfer',
				amount: 5400,
				date: '2021-01-21',
				description: 'Jemi Wilson'
			},
			{
				source: 'paypal',
				amount: 2500,
				date: '2021-01-25',
				description: 'Deposit PayPal'
			},
			{
				source: 'card',
				amount: -850,
				date: '2021-01-28',
				description: 'Deposit from my Card'
			},
		])
	}),
]
