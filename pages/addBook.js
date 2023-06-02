import Head from "next/head";
import { Heading, Flex, Input, Button, Text, Select } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useAuthorListByFullname } from '../hooks/useAuthor'
import { useCreateBook } from "../hooks/useBook";
import { useState, useEffect } from "react";


export default function AddBook() {
    const { getAuthorsByFullname, loading, error, data: authorByFullNameList } = useAuthorListByFullname();

    const {getCreateBook, loading: loadingCreate, error: errorCreate, data} = useCreateBook()

    const [book, setBook] = useState({})

    const addBook = (field, value) => {
        setBook({...book, [field]: value})
    }

    const savedBook = () => {
        getCreateBook({
            variables: {
                book: book
            }
        })
    }

    useEffect(() => {
        getAuthorsByFullname()
    }, [getAuthorsByFullname])

    if(loadingCreate){
        return <p>Loading Create Book</p>
    }

    if(errorCreate){
        return <p>The book could not be created</p>
    }

    return (
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
                        <Input placeholder="Book Name" variant="filled" mb={6} type="text" onChange={(e) => addBook('title', e.target.value)} />
                    </div>
                    <div>
                        <Text mb={6}>Book Author</Text>
                        <Select placeholder="Book Author" variant="filled" mb={6} onChange={(e) => addBook('authorId', e.target.value)}>
                            {authorByFullNameList['Authors'] && authorByFullNameList['Authors'].map((authorFullName, index) => {
                                console.log(authorFullName)
                                return <option key={index} value={authorFullName._id}>{authorFullName.fullName}</option>
                            })}
                        </Select>
                    </div>
                    <Button mb={6} colorScheme="teal" onClick={savedBook}>Add Book</Button>
                </Flex>
            </Flex>
        </>
    )
}