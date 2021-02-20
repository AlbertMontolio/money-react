import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type TenantContractCardProps = {
  tenantContract: any 
}

const StyledTenantContractCard = styled.div`
  background-color: orange;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
`

const Period = styled.div`

`

export const TenantContractCard: FunctionComponent<TenantContractCardProps> = ({
  tenantContract
}) => {
  console.log('tenantContract', tenantContract)
  const firstDay = (new Date(tenantContract.first_day)).toLocaleDateString("en-GB")
  const lastDay = (new Date(tenantContract.last_day)).toLocaleDateString("en-GB")
  return (
    <StyledTenantContractCard>
      <Period>
        {`${firstDay} - ${lastDay} (${tenantContract.id})`}
      </Period>
      {`${tenantContract.amount} / ${tenantContract.amount_period} ${tenantContract.unit}`}
    </StyledTenantContractCard>
  )
}