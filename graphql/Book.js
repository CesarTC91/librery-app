import {gql} from '@apollo/client'

export const BOOK_LIST = gql`
    query Books($filters: Book_filters) {
        Books(filters: $filters) {
            _id
            author{
                fullName
            }
            title
        }
    }
`



