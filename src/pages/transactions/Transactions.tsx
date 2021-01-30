import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'
import { urls } from '../../config'

interface ParamTypes {
  code: string
}

const StyledTransactions = styled.div`
  margin-top: 30px;
`

const Transaction = styled.div`
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  overflow: scroll;
  border-bottom: 1px solid rgb(200,200,200);
`

const Col = styled.div`
  width: 80px;
  overflow: scroll;
  padding: 5px;
`

export const Transactions = () => {
  const { code } = useParams<ParamTypes>()
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchTransactions = async () => {
      const url = `${urls.productionApi}/db_acc_transactions`
  
      try {
        const response = await fetch(url, {
          method: 'get',
          headers: {
            'Content-type': 'application/json'
          }
        })
        const responseData = await response.json()
        console.log('### responseData', responseData)
        setTransactions(responseData)
        console.log('responseData', responseData)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchTransactions()
  }, [])

  return (
    <Page>
      <Title>
        Transactions
      </Title>
      <Title>
        {code}
      </Title>
      <>
        {transactions.map((transaction: any) => (
          <Transaction>
            <Col>
              {transaction.buchungs_tag}
            </Col>
            <Col>
              {transaction.umsatzart}
            </Col>
            <Col>
              {transaction.beguenstigter_auftraggeber}
            </Col>
            <Col>
              {transaction.verwendungszweck}
            </Col>
            <Col>
              {transaction.iban}
            </Col>
            <Col>
              {transaction.bic}
            </Col>
            <Col>
              {transaction.kundenreferenz}
            </Col>
            <Col>
              {transaction.mandatsreferenz}
            </Col>
            <Col>
              {transaction.glaubiger_id}
            </Col>
            <Col>
              {transaction.fremde_gebuehren}
            </Col>
            <Col>
              {transaction.betrag}
            </Col>
            <Col>
              {transaction.abweichender_empfaenger}
            </Col>
            <Col>
              {transaction.anzahl_der_auftraege}
            </Col>
            <Col>
              {transaction.anzahl_der_schecks}
            </Col>
            <Col>
              {transaction.soll}
            </Col>
            <Col>
              {transaction.haben}
            </Col>
            <Col>
              {transaction.waehrung}
            </Col>
          </Transaction>
        ))}
      </>
    </Page>
  )
}
