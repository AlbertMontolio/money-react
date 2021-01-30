import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'
import { urls } from '../../config'
import { UrlParamTypes } from '../../types/common'

export const Reports = () => {
  const [data, setData] = useState([])
  const { code } = useParams<UrlParamTypes>()

  console.log('### data', data)

  useEffect(() => {
    const fetchFiles = async () => {
      console.log('### submitForm')
      const url = `${urls.productionApi}/db_acc_transactions/chart_data`
  
      try {
        const response = await fetch(url, {
          method: 'get',
          headers: {
            'Content-type': 'application/json'
          }
        })
        const responseData = await response.json()
        console.log('### responseData', responseData)
        setData(responseData)
        console.log('responseData', responseData)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchFiles()
  }, [])

  return (
    <Page>
      <Title>
        {`Reports ${code}`}
      </Title>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="aggregated" stroke="#8884d8" activeDot={{ r: 2 }} dot={false} />
      </LineChart>
    </Page>
  )
}
