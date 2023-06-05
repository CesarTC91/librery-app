import { useLazyQuery, useMutation } from "@apollo/client"
import { AUTHOR_LIST, CREATE_AUTHOR, AUTHOR_LIST_BY_FULLNAME, UPDATE_AUTHOR, DELETE_AUTHOR } from "../graphql/Author"
import { useEffect } from "react"

//Hook para carga la data de todos los Authors
export const useAuthorList = () => {
    const [getAuthors, {loading, error, data={}}] = useLazyQuery(AUTHOR_LIST)

    useEffect(() => {
        getAuthors()
    }, [getAuthors])

    return {loading, error, data, getAuthors}
}

// Hook para crear Authors 
export const useCreateAuthor = () => {
    const [getCreateAuthor, {loading, error, data}] = useMutation(CREATE_AUTHOR)

    return {getCreateAuthor, loading, error, data}
}

//Hook para actualizar Authors
export const useUpdateAuthors = () => {
    const [getUpdateAuthor, {loading, error, data}] = useMutation(UPDATE_AUTHOR)

    return {getUpdateAuthor, loading, error, data}
}

//Hook para eleminar Authors
export const useDeleteAuthors = () => {
    const [getDeleteAuthor, {loading, error, data}] = useMutation(DELETE_AUTHOR)

    return {getDeleteAuthor, loading, error, data}
}

//Hook para llamar a todos los Authors por su FullName
export const useAuthorListByFullname = () => {
    const [getAuthorsByFullname, {loading, error, data={}}] = useLazyQuery(AUTHOR_LIST_BY_FULLNAME)

    return {getAuthorsByFullname, loading, error, data}
}