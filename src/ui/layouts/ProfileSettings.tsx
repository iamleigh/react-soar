import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'
import { Icon } from '../components/Icon'
import { InputField as UIInputField } from '../components/InputField'
import { Button } from '../components/Button'
import mockavatar from '../../assets/images/avatar-empty.png'

const Form = styled.div`
	@media screen and (min-width: ${global.breakpoint}px) {
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
	}
`

const EditAvatar = styled.div`
	position: relative;
	margin: 0;
	padding: 0;
	border: 0;

	@media screen and (min-width: ${global.breakpoint}px) {
		flex: 0 0 auto;
	}
`

const AvatarImg = styled.img`
	width: 100px;
	height: 100px;
	border: 0;
	border-radius: 50%;

	@media screen and (min-width: ${global.breakpoint}px) {
		width: 90px;
		height: 90px;
	}
`

const AvatarLabel = styled.span`
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	position: absolute !important;
	margin: -1px;
	padding: 0;
	border: 0;
	word-wrap: normal !important;
`

const AvatarIcon = styled.span`
	cursor: pointer;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0;
	bottom: 0;
	border-radius: 50%;
	background: ${ color.mono.dark };
	color: ${ color.mono.light };
	font-size: 15px;
	transition: ${ global.transition };

	${EditAvatar}:hover & {
		background: ${ color.mono.light };
		color: ${ color.mono.dark };
	}
`

const Fields = styled.div`
	margin-top: 22px;

	@media screen and (min-width: ${global.breakpoint}px) {
		min-width: 1px;
		flex: 1;
		margin-top: 0;
		margin-left: 57px;
	}
`

const Row = styled.div`
	@media screen and (min-width: ${global.breakpoint}px) {
		display: flex;
		margin: 0 -14px 22px;
	}
`

const InputField = styled(UIInputField)`
	margin-bottom: 16px;

	@media screen and (min-width: ${global.breakpoint}px) {
		flex: 0 0 50%;
		margin: 0;
		padding: 0 14px;
	}
`

const Save = styled(Button)`
	@media screen and (min-width: ${global.breakpoint}px) {
		margin-left: auto;
	}
`

export const ProfileSettings = () => {
	const [avatar, setAvatar] = useState( mockavatar )
	const [name, setName] = useState( '' )
	const [username, setUsername] = useState( '' )
	const [email, setEmail] = useState( '' )
	const [password, setPassword] = useState( '' )
	const [birthday, setBirthday] = useState( '' )
	const [address, setAddress] = useState( '' )
	const [addressAlt, setAddressAlt] = useState( '' )
	const [city, setCity] = useState( '' )
	const [zip, setZip] = useState( '' )
	const [country, setCountry] = useState( '' )

	useEffect(() => {
		fetch( '/api/user' )
			.then((res) => res.json())
			.then((data) => {
				setName( data.name )
				setUsername( data.username )
				setEmail( data.email )
				setPassword( data.password )
				setBirthday( data.birthday )
				setAddress( data.address.permanent )
				setAddressAlt( data.address.present )
				setCity( data.city )
				setZip( data.zip )
				setCountry( data.country )
			})
			.catch((err) => console.log( 'Failed to fetch user data:', err ))
	}, [])

	const handleFileUpload = ( event: React.ChangeEvent<HTMLInputElement> ) => {
		const file = event.target.files?.[0]

		if ( file ) {
			// Simulate storing the uploaded file
			const newAvatarURL = URL.createObjectURL(file)
			setAvatar(newAvatarURL)
		}
	};

	return (
		<Form>
			<EditAvatar>
				<AvatarImg src={ avatar } alt="User Avatar" aria-hidden="true" />
				<AvatarLabel>Edit Profile Image</AvatarLabel>
				<AvatarIcon aria-hidden="true">
					<Icon name="pencil" />
					<input
						type="file"
						accept="image/*"
						style={{ opacity: 0, position: 'absolute', width: '100%', height: '100%', cursor: 'pointer', zIndex: 2 }}
						onChange={ handleFileUpload } />
				</AvatarIcon>
			</EditAvatar>

			<Fields>
				<Row>
					<InputField id="name" label="Your Name" value={ name } type="text" onChange={( e ) => setName( e.target.value )} />
					<InputField id="username" label="Username" value={ username } type="text" onChange={( e ) => setUsername( e.target.value )} />
				</Row>

				<Row>
					<InputField id="email" label="Email" value={ email } type="text" onChange={( e ) => setEmail( e.target.value )} />
					<InputField id="password" label="Password" value={ password } type="password" onChange={( e ) => setPassword( e.target.value )} />
				</Row>

				<Row>
					<InputField id="birthday" label="Date of Birth" value={ birthday } type="text" onChange={( e ) => setBirthday( e.target.value )} />
					<InputField id="present-address" label="Present Address" value={ addressAlt } type="text" onChange={( e ) => setAddressAlt( e.target.value )} />
				</Row>

				<Row>
					<InputField id="permanent-address" label="Permanent Address" value={ address } type="text" onChange={( e ) => setAddress( e.target.value )} />
					<InputField id="city" label="City" value={ city } type="text" onChange={( e ) => setCity( e.target.value )} />
				</Row>

				<Row>
					<InputField id="zip" label="Postal Code" value={ zip } type="text" onChange={( e ) => setZip( e.target.value )} />
					<InputField id="country" label="Country" value={ country } type="text" onChange={( e ) => setCountry( e.target.value )} />
				</Row>

				<Save label="Save" />
			</Fields>
		</Form>
	)
}
