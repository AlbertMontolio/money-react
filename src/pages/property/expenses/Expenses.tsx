import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Card } from '../../../brewery/card/Card'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Collection } from '../Collection'
import { Item } from '../Item'
import { Amount } from '../Amount'
import { urls } from '../../../config'
import { useAuthorize } from '../../../providers/authorize-provider/AuthorizeProvider'

const Description = styled.div`
  width: 140px;
  &:hover {
    cursor: pointer;
  }
`

const StyledItem = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 10px;
`

const Status = styled.div`
`

const Date = styled.div`
  width: 110px;
`

const SubTotal = styled.div`
  font-size: 14px;
  margin-top: 2px;
  color: rgb(80,80,80);
`

export const Expenses = () => {
  const { 
    property: {
      expenses: {
        collection,
        total,
        totalPending,
        totalDone
      }
    } 
  } = useProperty()
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()

  const handleOnClick = async (expenseId: any) => {
    console.log('handle on clickkk')
    const url = `${urls.productionApi}/expenses/${expenseId}/toggle`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      console.log('### responseData', responseData)
      window.location.reload()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Card>
      <Title>
        Expenses
      </Title>
      <Collection>
        {collection.map((expense: any) => (
          <StyledItem onClick={() => handleOnClick(expense.id)}>
            <Item>
              <Amount>
                {expense.amount} €
              </Amount>
              <Description>
                {expense.description}
              </Description>
              <Date>
                {expense.date}
              </Date>
              <Status>
                {expense.done ? 'done' : 'pendingg'}
              </Status>
            </Item>
          </StyledItem>
        ))}
      </Collection>
      <SubTitle marginBottom={0}>
        Total: {totalDone} €
      </SubTitle>
      <SubTotal>
        Total pending: {totalPending} €
      </SubTotal>
      <SubTotal>
        Total: {total} €
      </SubTotal>
    </Card>
  )
}
