import React from 'react'
import styled from 'styled-components'

import { UploaderLink } from './uploader-link/UploaderLink'
import { uploaderLinks } from './uploaderLinks'
import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'

export const Uploaders = () => {
	return (
		<Page>
			<Title>
				Uploaders
			</Title>
			<>
				{uploaderLinks.map((uploaderLink) => <UploaderLink uploaderLink={uploaderLink} />)}
			</>
		</Page>
	)
}
