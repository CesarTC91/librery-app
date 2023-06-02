import { gql } from '@apollo/client'

export const AUTHOR_LIST = gql`
    query Authors($filters: Author_filters) {
        Authors(filters: $filters) {
            _id
            fullName
            firstName
            lastName
        }
    }
`


export const CREATE_AUTHOR = gql`
    mutation Author_create($author: Author_input){
        Author_create(author: $author){
            firstName
            lastName
        }
    }
`

export const AUTHOR_LIST_BY_FULLNAME = gql`
    query Authors($filters: Author_filters){
        Authors(filters: $filters){
            fullName
            _id
        }
    }
`
