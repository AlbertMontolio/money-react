import React from 'react'
import styled from 'styled-components'
import LogoInvestment from '../../images/home/logo_investment.png'

import { SignInForm } from '../../components/organisms/sign-in-form/SignInForm'

// 	https://git.heroku.com/immense-hollows-05384.git (fetch)

const SyledHome = styled.div`
	padding: 20px;
`

const StyledTitle = styled.div`
	font-size: 40px;
	font-weight: bold;
`

const StyledSubtitle = styled.div`
	font-size: 20px;
`

const StyledImage = styled.img`
	width: 200px;	
`


export const Home = () => {
	return (
		<SyledHome>
			<StyledTitle>
				Olgari S.L.
			</StyledTitle>
			<StyledSubtitle>
				We bring algorithms to real state
			</StyledSubtitle>
			<StyledImage src={LogoInvestment} />
			<SignInForm />
		</SyledHome>
	)
}
