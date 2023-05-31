import Head from "next/head";
import { Heading, Flex, Input, Button, Text, Textarea } from "@chakra-ui/react";
import Navbar from "../components/Navbar";


export default function AddBook () {
    return(
        <>
            <Head>
                <title>Add Book - Library Appp</title>
            </Head>

            <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">Add Book To Library App</Heading>
            <Navbar />

            <Flex height="70vh" mt={20} alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" p={12} rounded={6}>
                    <Heading mb={6} textAlign="center">Add Book To Library</Heading>
                    <div>
                        <Text mb={6}>Book Name</Text>
                        <Input placeholder="Book Name" variant="filled" mb={6} type="text" />
                    </div>
                    <div>
                        <Text mb={6}>Book Author</Text>
                        <Input placeholder="Book Author" variant="filled" mb={6} type="text" />
                    </div>
                    <div>
                        <Text mb={6}>Date of Publication</Text>
                        <Input placeholder="Date of Publication" variant="filled" mb={6} type="date" />
                    </div>
                    <div>
                        <Text mb={6}>House publisher of the Book</Text>
                        <Input placeholder="Publisher of the book" variant="filled" mb={6} type="text" />
                    </div>
                    <div>
                        <Text mb={6}>Description of the Book</Text>
                        <Textarea mb={6} placeholder="Write the description of the book" />
                    </div>
                    <Button mb={6} colorScheme="teal">Add Book</Button>
                </Flex>
            </Flex>
        </>
    )
}