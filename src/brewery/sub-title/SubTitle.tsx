import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledSubTitle = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 20px;
`

export const SubTitle: FunctionComponent = ({ children }) => {
	return (
		<StyledSubTitle>
			{children}
		</StyledSubTitle>
	)
}