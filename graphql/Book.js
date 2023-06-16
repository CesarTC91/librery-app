import {gql} from '@apollo/client'

//Funcion que lista todos los Books
export const BOOK_LIST = gql`
    query Book($filters: Book_filters) {
        Book(filters: $filters) {
            _id
            title
            author{
                fullName
            }
        }
    }
`

//Funcion que crea los Books
export const CREATE_AND_UPDATE_BOOK = gql`
      mutation Book_save($book: Book_input){
        Book_save(book: $book){
            title 
            authorId
        }
    }
`


//Funcion que actualiza los Books 
export const UPDATE_BOOK = gql`
    mutation Book_save($book: Book_input){
        Book_save(book: $book)
    }
`

//Función que elimina un unico Book
export const DELETE_BOOK = gql`
    mutation Book_delete($id: [String]) {
        Book_delete(_id: $id)
    }
`

//Creamos una funcion que elimine todos los Books 
export const DELETE_ALL_BOOKS = gql`
    mutation Book_delete($id: [String]){
        Book_delete(_id: $id)
    }
`


