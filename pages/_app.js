import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import { ApolloClient } from '@apollo/client'

import '../styles/globals.css'



function MyApp({ Component, pageProps  }) {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
