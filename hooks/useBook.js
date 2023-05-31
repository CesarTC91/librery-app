import {useQuery, useLazyQuery} from '@apollo/client'
import { BOOK_LIST} from '../graphql/Book'
import { useEffect } from 'react';


export const useBookList = () => {
    const [getBooks, { loading, error, data={} }] = useLazyQuery(BOOK_LIST);

    useEffect(() => {
        getBooks()
    }, [getBooks])

    console.log(data)
    return {loading, error, data, getBooks}
    
}