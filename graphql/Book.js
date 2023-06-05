import {gql} from '@apollo/client'

export const BOOK_LIST = gql`
    query Books($filters: Book_filters) {
        Books(filters: $filters) {
            _id
            title
            author{
                fullName
            }
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

export const UPDATE_BOOK = gql`
    mutation Book_update($book: Book_input){
        Book_update(book: $book){
            _id
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


