import { useLazyQuery, useMutation } from "@apollo/client"
import { AUTHOR_LIST, CREATE_AUTHOR, AUTHOR_LIST_BY_FULLNAME } from "../graphql/Author"
import { useEffect } from "react"

export const useAuthorList = () => {
    const [getAuthors, {loading, error, data={}}] = useLazyQuery(AUTHOR_LIST)

    useEffect(() => {
        getAuthors()
    }, [getAuthors])

    return {loading, error, data, getAuthors}
}

export const useCreateAuthor = () => {
    const [getCreateAuthor, {loading, error, data}] = useMutation(CREATE_AUTHOR)

    return {getCreateAuthor, loading, error, data}
}

export const useAuthorListByFullname = () => {
    const [getAuthorsByFullname, {loading, error, data={}}] = useLazyQuery(AUTHOR_LIST_BY_FULLNAME)

    return {getAuthorsByFullname, loading, error, data}
}