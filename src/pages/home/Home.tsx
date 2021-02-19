import React from 'react'
import styled from 'styled-components'
import LogoInvestmentImg from '../../images/home/logo_investment.png'
import RealStateImg from '../../images/home/real_state.jpg'
import BigDataImg from '../../images/home/big_data.jpg'
import CodingImg from '../../images/home/coding.png'

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
	console.log('### Home')
	return (
		<SyledHome>
			<StyledTitle>
				Olgari S.L.
			</StyledTitle>
			<StyledSubtitle>
				We bring algorithms to real state
			</StyledSubtitle>
			<StyledImage src={LogoInvestmentImg} />
			<StyledImage src={RealStateImg} />
			<StyledImage src={BigDataImg} />
			<StyledImage src={CodingImg} />
		</SyledHome>
	)
}
