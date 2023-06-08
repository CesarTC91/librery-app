import Head from 'next/head'
import { Heading, Flex, Input, Text, Button } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { useCreateAuthor } from '../hooks/useAuthor'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

export default function AddAuthor (){
    const { getCreateAuthor, loading, error } = useCreateAuthor();

    const toast = useToast()

    const [author, setAuthor] = useState({})

 

    const addAuthor = (field, value) => {
        setAuthor({...author, [field]: value})
    }

    const savedAuthor = async () => {
      const res = await getCreateAuthor({
            variables: {
                author: author
            }
        })
        if(res){
            if(res.errors){
                toast({
                    title: 'THE_AUTHOR_COULD_NOT_BE_ADDED',
                    description: `${res.message}`, 
                    status: 'error', 
                    duration: 1500,
                    isClosable: true,
                    position: 'top'
                })
            }else{
                toast({
                    title: 'SUCCESS', 
                    description: 'THE_AUTHOR_WAS_ADDED', 
                    status: 'success',
                    duration:1500,
                    isClosable: true, 
                    position: 'top'
                })
            }
        }
    }

    if(loading){
        return <p>Creating author data</p>
    }

    if(error){
        return <p>The Authors Data Was Not Created</p>
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

