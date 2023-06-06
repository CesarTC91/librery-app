import {useLazyQuery, useMutation} from '@apollo/client'
import { BOOK_LIST, CREATE_BOOK, DELETE_BOOK, UPDATE_BOOK} from '../graphql/Book'
import { useEffect } from 'react';


export const useBookList = () => {
    const [getBooks, { loading, error, data={}, refetch }] = useLazyQuery(BOOK_LIST);

    useEffect(() => {
        getBooks()
    }, [getBooks])

   
    return {loading, error, data, getBooks, refetch}
    
}

export const useCreateBook = () => {
    const [getCreateBook, {loading, error, data}] = useMutation(CREATE_BOOK)

    return {getCreateBook, loading, error, data}
}

export const useUpdateBook = () => {
    const [getUpdateBook, {loading, error, data}] = useMutation(UPDATE_BOOK)

    return {getUpdateBook, loading, error, data}
}

export const useDeleteBook = () => {
    const [getDeleteBook, {loading, error, data}] = useMutation(DELETE_BOOK)

    return {getDeleteBook, loading, error, data}
}