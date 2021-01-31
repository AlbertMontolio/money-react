import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'
import { urls } from '../../config'
import { UrlParamTypes } from '../../types/common'
import { ChartLinear } from '../../components/atoms/chart-linear/ChartLinear'

const ChartWrapper = styled.div`
  margin-bottom: 40px;
  background-color: white;
  padding: 10px 0px
`

const Year = styled.div`
  font-weight: bold;
`

const StyledReports = styled.div`
  background-color: #F1F3F5; 
`

const Button = styled(NavLink)`
  background-color: rgb(230,230,230);
  padding: 5px 10px;
  border-radius: 100px;
`

export const Reports = () => {
  const [data2020, setData2020] = useState<any>([])
  const [data2019, setData2019] = useState<any>([])
  const [data2018, setData2018] = useState<any>([])
  const [data2017, setData2017] = useState<any>([])
  const [data2016, setData2016] = useState<any>([])
  const [data2015, setData2015] = useState<any>([])
  const [data2014, setData2014] = useState<any>([])
  const [data2013, setData2013] = useState<any>([])
  const [data2012, setData2012] = useState<any>([])
  const { code } = useParams<UrlParamTypes>()

  console.log('### data2020', data2020)

  const fetchData = async (year: number) => {
    console.log('### year', year)
    const url = `${urls.productionApi}/db_acc_transactions/year_data?year=${year}`

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

  const increment2020 = data2020[data2020.length - 1]?.aggregated
  const increment2019 = data2019[data2019.length - 1]?.aggregated
  const increment2018 = data2018[data2018.length - 1]?.aggregated
  const increment2017 = data2017[data2017.length - 1]?.aggregated
  const increment2016 = data2016[data2016.length - 1]?.aggregated
  const increment2015 = data2015[data2015.length - 1]?.aggregated
  const increment2014 = data2014[data2014.length - 1]?.aggregated
  const increment2013 = data2013[data2013.length - 1]?.aggregated
  const increment2012 = data2012[data2012.length - 1]?.aggregated

  console.log('### increment2020', increment2020)
  console.log('### increment2019', increment2019)

  return (
    <StyledReports>
      <Title>
        {`Reports ${code}`}
      </Title>
      <>
        <ChartWrapper>
          <Year>
            {`2020: ${increment2020}`}
          </Year>
          <ChartLinear data={data2020} />
          <Button to={`/${code}/reports/years/2020`}>
            Monthly report
          </Button>
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2019: ${increment2019}`}
          </Year>
          <ChartLinear data={data2019} />
          <Button to={`/${code}/reports/years/2019`}>
            Monthly report
          </Button>
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2018: ${increment2018}`}
          </Year>
          <ChartLinear data={data2018} />
          <Button to={`/${code}/reports/years/2018`}>
            Monthly report
          </Button>
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2017: ${increment2017}`}
          </Year>
          <ChartLinear data={data2017} />
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2016: ${increment2016}`}
          </Year>
          <ChartLinear data={data2016} />
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2015: ${increment2015}`}
          </Year>
          <ChartLinear data={data2015} />
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2014: ${increment2014}`}
          </Year>
          <ChartLinear data={data2014} />
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2013: ${increment2013}`}
          </Year>
          <ChartLinear data={data2013} />
        </ChartWrapper>
        <ChartWrapper>
          <Year>
            {`2012: ${increment2012}`}
          </Year>
          <ChartLinear data={data2012} />
        </ChartWrapper>
      </>
    </StyledReports>
  )
}
