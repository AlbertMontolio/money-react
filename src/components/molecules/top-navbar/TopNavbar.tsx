import React from 'react'
import styled from 'styled-components'

import Origami from '../../../images/home/origami.png'

import  RightNavbar from '../right-navbar/RightNavbar'

const PositionWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`

const StyledImg = styled.img`
  width: 25px;
`

const Text = styled.div`
  font-weight: bold;
  margin-left: 5px;
`

const StyledTopNavbar = styled.div`
	height: 50px;
	width: 100%;
  display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgb(245,245,245);
  border-top: 1px solid rgb(240,240,240);
  padding: 0px 10px;
  box-sizing: border-box;
`

export const TopNavbar = () => {
  return (
    <PositionWrapper>
      <StyledTopNavbar>
        <StyledLogo>
          <StyledImg src={Origami} />
          <Text>
            Olgari
          </Text>
        </StyledLogo>
        <RightNavbar />
      </StyledTopNavbar>
    </PositionWrapper>
  )
}
