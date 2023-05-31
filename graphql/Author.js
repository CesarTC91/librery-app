import { gql } from '@apollo/client'

export const AUTHOR_LIST = gql`
    query authors {
        authors {
            _id
            createdAt
            firtsName
            lastName
            updatedAt
        }
    }
  
`

