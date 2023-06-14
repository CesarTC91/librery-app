import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ContainerListAuthors from "../components/ContainerListAuthors";

export default function AuthorList () {
    return (
        <>
            <Head>
                <title>Author List - Library App</title>
            </Head>

            <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">List of the Authors in Library App</Heading>
            <Navbar />
            
            <ContainerListAuthors />
        </>
    )
}