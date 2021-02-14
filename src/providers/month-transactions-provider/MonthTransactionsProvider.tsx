import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext,
  FunctionComponent
} from 'react'

import { urls } from '../../config'

const MonthTransactionsContext = createContext<any>([])

type MonthTransactionsProviderProps = {
  year: string | undefined
  month: string | undefined
}

export const MonthTransactionsProvider: FunctionComponent<MonthTransactionsProviderProps> = ({
  children, 
  year,
  month
}) => {
  const [monthTransactions, setMonthTransactions] = useState([])

  console.log('### YearDataProvider year', year)

  const fetchData = async () => {
    console.log('### year', year)
    console.log('### month', month)
    const url = `${urls.productionApi}/db_acc_transactions?year=${year}&month=${month}`
    console.log('### url', url)

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const responseData = await response.json()
      console.log('### responseData', responseData)
      setMonthTransactions(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <MonthTransactionsContext.Provider value={monthTransactions}>
      {children}
    </MonthTransactionsContext.Provider>
  )
}

export const useMonthTransactions = () => {
  const monthTransactions = useContext(MonthTransactionsContext)

  return { monthTransactions }
}
