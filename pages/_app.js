import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { withApolloClient } from '@codecraftkit/apollo'
import { apolloSettings } from '../helpers/apolloSettings'
import '../styles/globals.css'



function MyApp({ Component, pageProps, apolloClient }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default withApolloClient(MyApp, apolloSettings)
