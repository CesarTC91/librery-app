import { Heading  } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import CardsPhrases from "../components/CardsPhrases"






export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Library App</title>
      </Head>

      <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">Welcome To My Library App</Heading>
      <Navbar />
      
      <CardsPhrases />

 
    </>
  )
}
