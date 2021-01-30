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
import { Chart } from './Chart'

const ChartWrapper = styled.div`
  margin-bottom: 40px;
`

const Year = styled.div`
  font-weight: bold;
`

type DataProps = {
  year: any
}

export const Reports = () => {
  const [data2020, setData2020] = useState([])
  const [data2019, setData2019] = useState([])
  const [data2018, setData2018] = useState([])
  const [data2017, setData2017] = useState([])
  const [data2016, setData2016] = useState([])
  const [data2015, setData2015] = useState([])
  const [data2014, setData2014] = useState([])
  const [data2013, setData2013] = useState([])
  const [data2012, setData2012] = useState([])
  const { code } = useParams<UrlParamTypes>()

  console.log('### data2020', data2020)

  const fetchData = async (year: number) => {
    console.log('### year', year)
    const url = `${urls.productionApi}/db_acc_transactions/chart_data?year=${year}`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const responseData = await response.json()

      switch(year) {
        case 2020:
          setData2020(responseData)
          break;
        case 2019:
          setData2019(responseData)
          break;
        case 2018:
          setData2018(responseData)
          break;
        case 2017:
          setData2017(responseData)
          break;
        case 2016:
          setData2016(responseData)
          break;
        case 2016:
          setData2016(responseData)
          break;
        case 2015:
          setData2015(responseData)
          break;
        case 2014:
          setData2014(responseData)
          break;
        case 2013:
          setData2013(responseData)
          break;
        case 2012:
          setData2012(responseData)
          break;
        default:
          // code block
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData(2020)
    fetchData(2019)
    fetchData(2018)
    fetchData(2017)
    fetchData(2016)
    fetchData(2015)
    fetchData(2014)
    fetchData(2013)
    fetchData(2012)
  }, [])

  return (
    <Page>
      <Title>
        {`Reports ${code}`}
      </Title>
      <>
        <ChartWrapper>
          <Year>
            2020
          </Year>
          <Chart data={data2020} />
          <Year>
            2019
          </Year>
          <Chart data={data2019} />
          <Year>
            2018
          </Year>
          <Chart data={data2018} />
          <Year>
            2017
          </Year>
          <Chart data={data2017} />
          <Year>
            2016
          </Year>
          <Chart data={data2016} />
          <Year>
            2015
          </Year>
          <Chart data={data2015} />
          <Year>
            2014
          </Year>
          <Chart data={data2014} />
          <Year>
            2013
          </Year>
          <Chart data={data2013} />
          <Year>
            2012
          </Year>
          <Chart data={data2012} />
        </ChartWrapper>
      </>
    </Page>
  )
}
