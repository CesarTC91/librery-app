import {gql} from '@apollo/client'

//Creamos la función que nos permite crear el usuario
export const CREATE_USER = gql`
  mutation User_save($user: User_input){
    User_save(user: $user)
  }
`