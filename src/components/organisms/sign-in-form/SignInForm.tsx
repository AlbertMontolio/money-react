import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { urls } from '../../../config'
import { useAuthenticate } from '../../../providers/authenticate-provider/AuthenticateProvider'
import { useAuthorize } from '../../../providers/authorize-provider/AuthorizeProvider'
import { useUser } from '../../../providers/user-provider/UserProvider'
import { Button } from '../../../brewery/button/Button'

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
`

const Label = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
`

export const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { authenticate, setAuthenticate } = useAuthenticate()
  const { authorize, setAuthorize } = useAuthorize()
  const { setUser, user } = useUser()

  console.log('### email', email)
  console.log('### password', password)

  const handleOnSubmit = () => {
    const signInBackend = async () => {
      const url = `${urls.productionApi}/sign-in-with-email`
  
      try {
        const response = await fetch(url, {
          method: 'post',
          body: JSON.stringify({
            email: email,
            password: password
          }),
          headers: {
            'Content-type': 'application/json'
          }
        })
        const json = await response.json()
  
        console.log('json>>>', json)
  
        if (json.authorization_token) {
          // @ts-ignore
          setAuthenticate({...authenticate, authenticateToken: response.accessToken})
    
          // @ts-ignore
          setAuthorize({...authorize, authorizeToken: json.authorization_token, backendUserId: json.backend_user_id})
    
          // @ts-ignore
          setUser({
            // @ts-ignore
            ...user,
            firstName: json.first_name,
            lastName: json.last_name,
            email: json.email
          })
  
          // @ts-ignore
          // history.push('/')
        } else {
          console.log('something went wrong')
        }
        
      } catch (error) {
      }
    }
    signInBackend()
  }

  return (
    <div>
      <Inputs>
        <Label>
          email
        </Label>
        <StyledInput onChange={(e) => setEmail(e.target.value)} />
        <Label>
          password
        </Label>
        <StyledInput onChange={(e) => setPassword(e.target.value)} />
      </Inputs>
      <Button onClick={() => handleOnSubmit()}>
        LOG IN
      </Button>
    </div>
  )
}
