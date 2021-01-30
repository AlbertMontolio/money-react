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
	dataAccount: any
}

export const AccountLink: FunctionComponent<AccountLinkProps> = ({ dataAccount }) => {
	return (
		<StyledUploaderLink to={`/accounts/${dataAccount.code}`}>
				<Name>
					{dataAccount.name}
				</Name>
		</StyledUploaderLink>
	)
}
