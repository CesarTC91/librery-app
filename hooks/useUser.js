import { useMutation, useLazyQuery } from "@apollo/client";
import { CREATE_USER } from "../graphql/User";

export const useCreateUser = () => {
  const [getCreateUser, {loading, error,data}] = useMutation(CREATE_USER)

  return {getCreateUser, loading, error, data}
}