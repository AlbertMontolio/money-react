import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'
import { urls } from '../../config'

const Links = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(NavLink)`
  border-radius: 4px;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 30px;
`

interface ParamTypes {
  id: string
}

export const Account = () => {
  console.log('### account')
  const { id } = useParams<ParamTypes>()

  return (
    <Page>
      <Title>
        {`Account ${id}`}
      </Title>
      <Links>
        <StyledLink to={`/${id}/reports/years`}>
          Reports
        </StyledLink>
        <StyledLink to={`/real-state/accounts/${id}/files`}>
          Files
        </StyledLink>
      </Links>
    </Page>
  )
}
