import {gql} from '@apollo/client'

export const BOOK_LIST = gql`
    query Books($filters: Book_filters) {
        Books(filters: $filters) {
            _id
            title
        }
    }
`
export const CREATE_BOOK = gql`
    mutation Book_create($book: Book_input){
       Book_create(book: $book){
            title
            authorId
       }
    }
`

export const DELETE_BOOK = gql`
    mutation Book_delete($id: ID!){
        Book_delete(_id: $id){
            _id
        }
    }
`


