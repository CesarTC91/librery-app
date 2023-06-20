import { useLazyQuery, useMutation } from "@apollo/client"
import { AUTHOR_LIST, CREATE_AND_UPDATE_AUTHOR, AUTHOR_LIST_BY_FULLNAME,  DELETE_AUTHOR, DELETE_ALL_AUTHORS } from "../graphql/Author"
import { useEffect } from "react"

//Hook para carga la data de todos los Authors
export const useAuthorList = () => {
    const [getAuthors, { loading, error, data = {}, refetch }] = useLazyQuery(AUTHOR_LIST)

    useEffect(() => {
        getAuthors()
    }, [getAuthors])

    return { loading, error, data, getAuthors, refetch }
}

// Hook para crear Authors y modificar Authors
export const useCreateAndUpdateAuthor = () => {
    const [getCreateAndUpdateAuthor, { loading, error, data }] = useMutation(CREATE_AND_UPDATE_AUTHOR)

    return { getCreateAndUpdateAuthor, loading, error, data }
}



//Hook para eleminar Authors
export const useDeleteAuthors = () => {
    const [getDeleteAuthor, { loading, error, data, }] = useMutation(DELETE_AUTHOR)

    return { getDeleteAuthor, loading, error, data }
}

//Hook para eliminar a todos los Author
export const useDeleteAllAuthors = () => {
    const [getDeleteAllAuthors, {loading, error, data}] = useMutation(DELETE_ALL_AUTHORS)

    return {getDeleteAllAuthors, loading, error, data}
}

//Hook para llamar a todos los Authors por su FullName
export const useAuthorListByFullname = () => {
    const [getAuthorsByFullname, { loading, error, data = {} }] = useLazyQuery(AUTHOR_LIST_BY_FULLNAME)

    return { getAuthorsByFullname, loading, error, data }
}