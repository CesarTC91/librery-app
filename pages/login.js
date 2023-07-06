import { useState } from "react";
import Head from "next/head";
import { Heading, Flex, Text, Input, Button } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendLogin = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <>
      <Head>
        <title>Login Library App</title>
      </Head>

      <Heading
        textAlign="center"
        backgroundColor="whiteAlpha.200"
        color="blackAlpha.500"
      >
        Login User
      </Heading>

      <Flex height="70vh" mt={20} alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading mb={6} textAlign="center">
            Login User in Library App
          </Heading>
          <form onSubmit={handleSendLogin}>
            <div>
              <Text mb={6}>Email</Text>
              <Input
                placeholder="Email"
                variant="filled"
                type="email"
                mb={6}
                onChange={handleLogin}
              />
            </div>
            <div>
              <Text mb={6}>Password</Text>
              <Input
                placeholder="Password"
                variant="filled"
                type="password"
                mb={6}
                onChange={handleLogin}
              />
            </div>
            <Button mb={6} colorScheme="teal">
              Login in Page
            </Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
