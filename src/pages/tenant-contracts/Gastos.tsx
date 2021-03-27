import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type GastosProps = {
  gastos: any
}

const StyledGastos = styled.div`

`

const Factura = styled.div`

`

const Items = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

const Item = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
`

const Fecha = styled(Item)`
  width: 95px;
`

const Amount = styled(Item)`
  width: 80px; 
` 

export const Gastos: FunctionComponent<GastosProps> = ({gastos}) => {
  console.log('gastos', gastos)

  return (
    <StyledGastos>
      {gastos && gastos.map((gasto: any) => (
        <div>
          <Factura>
            {gasto.factura.referencia}
          </Factura>
          <>
            {gasto.gastos.map((gasto: any) => (
              <Items>
                <Fecha>
                  {gasto.fecha}
                </Fecha>
                <Amount>
                  {gasto.amount}
                </Amount>
                <Item>
                  {gasto.concept}
                </Item>
              </Items>
            ))}
          </>
        </div>
      ))}
    </StyledGastos>
  )
}
