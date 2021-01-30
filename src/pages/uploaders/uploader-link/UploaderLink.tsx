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

type UploaderLinkProps = {
	uploaderLink: any
}

export const UploaderLink: FunctionComponent<UploaderLinkProps> = ({ uploaderLink }) => {
	console.log('#### uploader', uploaderLink)
	return (
		<StyledUploaderLink to={`/uploaders/${uploaderLink.code}`}>
				<Name>
					{uploaderLink.name}
				</Name>
		</StyledUploaderLink>
	)
}
