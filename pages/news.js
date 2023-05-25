import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function News () {
    return(
        <>
            <Head>
                <title>News - Librery App</title>
            </Head>

            <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">News Page - Librery App</Heading>
            <Navbar />
        </>
    )
}