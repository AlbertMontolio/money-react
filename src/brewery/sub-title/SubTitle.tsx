import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type SubTitleType = {
	marginBottom?: number
}

const StyledSubTitle = styled.div<SubTitleType>`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: ${({marginBottom}) => `${marginBottom}px`};
`

export const SubTitle: FunctionComponent<SubTitleType> = ({ 
	children,
	marginBottom = 20
}) => {
	return (
		<StyledSubTitle marginBottom={marginBottom}>
			{children}
		</StyledSubTitle>
	)
}