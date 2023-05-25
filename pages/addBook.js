import Head from "next/head";
import { Heading, Flex, Input, Button, Text, Textarea } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import SearchCoverFile from "../components/UploadFiles";
import UploadBookFile from "../components/UploadFileBook";


export default function AddBook () {
    const [selectFile, setSelectFile] = useState(null)

    const [selectBookFile, setSelectBookFile] = useState(null)

    const handleFileChange = (file) => {
        setSelectFile(file);
    }

    const handleBookChange = (file) => {
        setSelectBookFile(file)
    }

    return(
        <>
            <Head>
                <title>Add Book - Librery Appp</title>
            </Head>

            <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">Add Book To Librery App</Heading>
            <Navbar />

            <Flex height="90vh" mt={20} alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" p={12} rounded={6}>
                    <Heading mb={6} textAlign="center">Add Book To Librery</Heading>
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