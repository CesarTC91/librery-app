import { gql } from '@apollo/client'


//Función para listar a todos los Authors que se encuentran en la DB 
export const AUTHOR_LIST = gql`
    query Author($filters: Author_filters) {
        Author(filters: $filters) {
            _id
            fullName
            firstName
            lastName
        }
    }
`

//Función para crear un nuevo Author
export const CREATE_AUTHOR = gql`
    mutation Author_create($author: Author_input){
        Author_create(author: $author){
            firstName
            lastName
        }
    }
`
//Función para actualizar algún Author que se encuentre en la DB
export const UPDATE_AUTHOR = gql`
    mutation Author_update($author: Author_input){
        Author_update(author: $author){
            _id
            firstName
            lastName
        }
    }
`
//Función para eliminar algún Author que se encuentre en la DB 
export const DELETE_AUTHOR = gql`
   mutation Author_delete($id: [String]) {
        Author_delete(_id: $id)
    }
`

export const DELETE_ALL_AUTHORS = gql`
    mutation Author_delete($id: [String]){
        Author_delete(_id: $id)
    }
`


//Función que me sirve para llenar un Select con el listado de los Authors por su FullName
export const AUTHOR_LIST_BY_FULLNAME = gql`
    query Author($filters: Author_filters){
        Author(filters: $filters){
            fullName
            _id
        }
    }
`
