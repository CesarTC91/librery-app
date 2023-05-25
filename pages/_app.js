import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import { ApolloClient } from '@apollo/client'

import '../styles/globals.css'

const client = new ApolloClient({
    uri: "https://localhost:3000",
    cache: new InMemoryCache()
})

function MyApp({ Component, pageProps  }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
