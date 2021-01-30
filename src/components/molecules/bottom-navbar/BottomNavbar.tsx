import React from 'react'
import styled from 'styled-components'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import BarChartIcon from '@material-ui/icons/BarChart';
import { NavLink } from 'react-router-dom'

const PositionWrapper = styled.div`
	position: fixed;
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
	background-color: rgb(245,245,245);
	border-top: 1px solid rgb(240,240,240);
`

const StyledNavLink = styled(NavLink)`
	margin: 0px 10px;
`

export const BottomNavbar = () => {
	return (
		<PositionWrapper>
			<StyledBottomNavbar>
				<StyledNavLink to='/'>
					<BarChartIcon />
				</StyledNavLink>
				<StyledNavLink to='/uploaders'>
					<PlaylistAddIcon />
				</StyledNavLink>
			</StyledBottomNavbar>
		</PositionWrapper>
	)
}
