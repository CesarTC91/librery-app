import Head from "next/head";
import { Heading, Container, Input, Button, Text, Textarea } from "@chakra-ui/react";
import Navbar from "../components/Navbar";


export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact - Library App</title>
            </Head>

            <Heading textAlign="center" backgroundColor="whiteAlpha.200" color="blackAlpha.500">Contact Page - Librery App</Heading>
            <Navbar />


            <Container height="100vh" alignItems="center" justifyContent="center">
                <Container flexDirection="column" background="gray.100" p={12} rounded={6}>
                    <Heading mb={6} textAlign="center">Contact With Librery</Heading>
                    <div>
                        <Text mb={6}>Name</Text>
                        <Input placeholder="Name" variant="filled" mb={6} type="text" id="name"  />
                    </div>
                    <div>
                        <Text mb={6}>Lastname</Text>
                        <Input placeholder="Lastname" variant="filled" mb={6} type="text" id="lastname" />
                    </div>
                    <div>
                        <Text mb={6}>Email</Text>
                        <Input placeholder="Enter your Email" variant="filled" mb={6} type="email" id="email"  />
                    </div>
                    <div>
                        <Text mb={6}>Message</Text>
                        <Textarea placeholder="What is your Message" id="message" />
                    </div>
                    <br/>
                    <div>
                        <Button  alignItems="center" mb={5} colorScheme="blue">Send Message</Button>
                    </div>
                </Container>
            </Container>
        </>
    )
}