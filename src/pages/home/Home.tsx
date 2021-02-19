import React from 'react'
import styled from 'styled-components'

import { SignInForm } from '../../components/organisms/sign-in-form/SignInForm'

// 	https://git.heroku.com/immense-hollows-05384.git (fetch)

const SyledHome = styled.div`

`


export const Home = () => {
	return (
		<SyledHome>
			<div>
				home
			</div>
			<SignInForm />
		</SyledHome>
	)
}
