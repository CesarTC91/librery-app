import {useLazyQuery, useMutation} from '@apollo/client'
import { BOOK_LIST, CREATE_AND_UPDATE_BOOK, DELETE_BOOK,  DELETE_ALL_BOOKS} from '../graphql/Book'
import { useEffect } from 'react';


export const useBookList = () => {
    const [getBooks, { loading, error, data={}, refetch }] = useLazyQuery(BOOK_LIST);

    useEffect(() => {
        getBooks()
    }, [getBooks])

   
    return {loading, error, data, getBooks, refetch}
    
}

export const useCreateAndUptadeBook = () => {
    const [getCreateAndUpdateBook, {loading, error, data}] = useMutation(CREATE_AND_UPDATE_BOOK)

    return {getCreateAndUpdateBook, loading, error, data}
}



export const useDeleteBook = () => {
    const [getDeleteBook, {loading, error, data}] = useMutation(DELETE_BOOK)

    return {getDeleteBook, loading, error, data}
}

export const useDeleteAllBooks = () => {
    const [getDeleteAllBooks, {loading, error, data}] = useMutation(DELETE_ALL_BOOKS)

    return {getDeleteAllBooks, loading, error, data}
}