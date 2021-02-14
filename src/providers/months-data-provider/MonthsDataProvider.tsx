import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext,
  FunctionComponent
} from 'react'

import { urls } from '../../config'

const MonthsDataContext = createContext<any>([])

type MonthsDataProviderProps = {
  year: string | undefined
}

export const MonthsDataProvider: FunctionComponent<MonthsDataProviderProps> = ({
  children, 
  year
}) => {
  const [monthsData, setMonthsData] = useState([])

  console.log('### YearDataProvider year', year)

  const fetchData = async () => {
    console.log('### year', year)
    const url = `${urls.productionApi}/db_acc_transactions/months_data?year=${year}`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const responseData = await response.json()
      console.log('### MonthsDataProvider responseData', responseData)
      setMonthsData(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <MonthsDataContext.Provider value={monthsData}>
      {children}
    </MonthsDataContext.Provider>
  )
}

export const useMonthsData = () => {
  const monthsData = useContext(MonthsDataContext)

  return { monthsData }
}
