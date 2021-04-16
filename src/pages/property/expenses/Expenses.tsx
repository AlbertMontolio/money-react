import React from 'react'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Card } from '../../../brewery/card/Card'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Collection } from '../Collection'
import { Item } from '../Item'
import { Amount } from '../Amount'

export const Expenses = () => {
  const { 
    property: { 
      expenses: {
        collection,
        total
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
            <div>
              {expense.description}
            </div>
          </Item>
        ))}
      </Collection>
      <SubTitle marginBottom={0}>
        Total: {total} €
      </SubTitle>
    </Card>
  )
}
