import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const PositionWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
`

const StyledBottomNavbar = styled.div`
	height: 60px;
	width: 100%;
  display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(250,250,250);
`

const StyledNavLink = styled(NavLink)`
	margin: 0px 10px;
`

export const BottomNavbar = () => {
	return (
		<PositionWrapper>
			<StyledBottomNavbar>
				<StyledNavLink to='/'>
					sth
				</StyledNavLink>
				<StyledNavLink to='/'>
					add
				</StyledNavLink>
			</StyledBottomNavbar>
		</PositionWrapper>
	)
}
