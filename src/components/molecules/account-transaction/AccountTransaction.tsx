import React from 'react'
import styled from 'styled-components'

const StyledTransaction = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 5px;
`

const Item = styled.div`
  background-color: white;
  flex-shrink: 0;
  width: 100px;
  overflow: scroll;
  padding: 5px 10px;
  height: 30px;
  margin: 0px 2px;
`

export const AccountTransaction = ({transaction}: {transaction: any}) => {
  console.log('transaction', transaction)
  return (
    <StyledTransaction>
      {transaction.map((item: any) => (
        <Item>
          {item.value}
        </Item>
      ))}
    </StyledTransaction>
  )
}
