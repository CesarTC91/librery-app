import { useQuery } from "@apollo/client"
import { AUTHOR_LIST } from "../graphql/Author"

export const useAuthorList = () => {
    const {loading, error, data} = useQuery(AUTHOR_LIST)


    return {loading, error, data}
}