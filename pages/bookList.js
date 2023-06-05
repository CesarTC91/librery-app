import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import DataTableBooks from "../components/DataTableBooks"

export default function BookList () {
    return (
        <>
            <Head>
                <title>Book List - Library App</title>
            </Head>


            <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">List of the Books in Library App</Heading>
            <Navbar />

            <DataTableBooks />
        </>
    )
}