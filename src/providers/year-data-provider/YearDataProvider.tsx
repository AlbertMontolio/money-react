import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext,
  FunctionComponent
} from 'react'

import { urls } from '../../config'

const YearDataContext = createContext<any>([])

type YearDataProviderProps = {
  year: string | undefined
}

export const YearDataProvider: FunctionComponent<YearDataProviderProps> = ({children, year}) => {
  const [yearData, setYearData] = useState([])

  const fetchData = async () => {
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
      setYearData(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <YearDataContext.Provider value={yearData}>
      {children}
    </YearDataContext.Provider>
  )
}

export const useYearData = () => {
  const yearData = useContext(YearDataContext)

  return { yearData }
}
