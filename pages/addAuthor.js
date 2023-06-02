import Head from 'next/head'
import { Heading, Flex, Input, Text, Button } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { useCreateAuthor } from '../hooks/useAuthor'
import { useState } from 'react'

export default function AddAuthor (){
    const {loading, error, data, getCreateAuthor } = useCreateAuthor();

    const [author, setAuthor] = useState({})

    if(loading){
        return <p>Loading Data..</p>
    }

    if(error){
        return <p>Cant save author</p>
    }

    const addAuthor = (field, value) => {
        setAuthor({...author, [field]: value})
    }

    const savedAuthor = () => {
        getCreateAuthor({
            variables: {
                author: author
            }
        })
    }

    return (
        <>
            <Head>
                <title>Add Author - Library App</title>
            </Head>

            <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">Add Author To Library App</Heading>
            <Navbar />

            <Flex height="70vh" mt={2} alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" p={12} rounded={6}>
                    <Heading mb={6} textAlign="center">Add Author To Library</Heading>

             
                    <div>
                        <Text mb={6}>Author Name</Text>
                        <Input placeholder='Author Name' onChange={(e) => addAuthor('firstName', e.target.value)} variant="filled" mb={6} type='text' />
                    </div>

                    <div>
                        <Text mb={6}>Author Lastname</Text>
                        <Input placeholder='Author Lastname' onChange={(e) => addAuthor('lastName', e.target.value)} variant="filled" mb={6} type='text' />
                    </div>
                    <Button mb={6} colorScheme="teal" onClick={savedAuthor}>Add Author</Button>
                </Flex>
            </Flex>

        </>
    )
}

