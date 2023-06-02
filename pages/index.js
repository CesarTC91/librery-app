import { Heading } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import DataTableBooks from "../components/DataTableBooks"
import DataTableAuthors from "../components/DataTableAuthors"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Library App</title>
      </Head>

      <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">Welcome To My Library App</Heading>
      <Heading textAlign="center" background="whiteAlpha.200" justifyContent="center" display="flex" p={6}>
       
      </Heading>
      <Navbar />

      <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">List of the Books</Heading>

      <DataTableBooks />
      <DataTableAuthors />

    </>
  )
}
