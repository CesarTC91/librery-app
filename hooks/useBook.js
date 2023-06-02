import {useLazyQuery, useMutation} from '@apollo/client'
import { BOOK_LIST, CREATE_BOOK, DELETE_BOOK} from '../graphql/Book'
import { useEffect } from 'react';


export const useBookList = () => {
    const [getBooks, { loading, error, data={} }] = useLazyQuery(BOOK_LIST);

    useEffect(() => {
        getBooks()
    }, [getBooks])

    console.log(data)
    return {loading, error, data, getBooks}
    
}

export const useCreateBook = () => {
    const [getCreateBook, {loading, error, data}] = useMutation(CREATE_BOOK)

    return {getCreateBook, loading, error, data}
}

export const useDeleteBook = () => {
    const [getDeleteBook, {loading, error, data}] = useMutation(DELETE_BOOK)

    return {getDeleteBook, loading, error, data}
}