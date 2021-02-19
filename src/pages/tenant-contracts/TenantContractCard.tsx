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

export const TenantContractCard: FunctionComponent<TenantContractCardProps> = ({
  tenantContract
}) => {
  return (
    <StyledTenantContractCard>
      {`${tenantContract.amount} / ${tenantContract.amount_period} ${tenantContract.unit}`}
    </StyledTenantContractCard>
  )
}