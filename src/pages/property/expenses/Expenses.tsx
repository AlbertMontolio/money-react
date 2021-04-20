import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Card } from '../../../brewery/card/Card'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Collection } from '../Collection'
import { Item } from '../Item'
import { Amount } from '../Amount'

const Description = styled.div`
  width: 140px;
  &:hover {
    cursor: pointer;
  }
`

const Status = styled.div`
  &:hover {
    cursor: pointer;
  }
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

  return (
    <Card>
      <Title>
        Expenses
      </Title>
      <Collection>
        {collection.map((expense: any) => (
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
              {expense.status}
            </Status>
          </Item>
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
