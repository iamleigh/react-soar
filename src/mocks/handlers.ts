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
	})
]
