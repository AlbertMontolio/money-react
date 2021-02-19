import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

const StyledUploaderLink = styled(NavLink)`
	padding: 20px;
	margin-bottom: 20px;
`

const Name = styled.div`
	font-weight: bold;
`

type AccountLinkProps = {
	userAccount: any
}

export const AccountLink: FunctionComponent<AccountLinkProps> = ({ userAccount }) => {
	return (
		<StyledUploaderLink to={`/real-state/accounts/${userAccount.id}`}>
				<Name>
					{userAccount.name}
				</Name>
		</StyledUploaderLink>
	)
}
