import { gql } from '@apollo/client'
export const getFundsTransfers = gql`
query GetFundTransfers {
    fundTransfers(sort: CREATEDATS_DESC,limit:50,filter: {status: "queued", type: "funds_disbursed_from_safe"}) {
      executionTimestamp
      transactionHash
      tokenUSDValue
      tokenName
      status
      application {
        id:_id
      }
      grant {
        workspace {
          safe {
            address
            chainId
          }
        }
      }
    }
  }
`  