import React from 'react'
import styled from 'styled-components'

const StyledTransactionItem = styled.div`
  background-color: white;
  font-size: 12px;
  margin-bottom: 10px;
  padding: 10px;
`

const Info = styled.div`
  margin-bottom: 2px;
`

const Values = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Value = styled(Info)`
  margin: 0px 5px;
  font-weight: bold;
  font-size: 14px;
`

export const TransactionItem = ({transaction}: {transaction: any}) => {
  return (
    <StyledTransactionItem>
      <Info>
        {transaction.buchungs_tag}
      </Info>
      <Info>
        {transaction.umsatzart}
      </Info>
      <Info>
        {transaction.beguenstigter_auftraggeber}
      </Info>
      <Info>
        {transaction.verwendungszweck}
      </Info>
      <Values>
        <Value>
          {`soll: ${transaction.soll}`}
        </Value>
        <Value>
          {`haben: ${transaction.haben}`}
        </Value>
      </Values>
    </StyledTransactionItem>
  )
}
