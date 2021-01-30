import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
`

export const Title: FunctionComponent = ({ children }) => {
	return (
		<StyledTitle>
			{children}
		</StyledTitle>
	)
}