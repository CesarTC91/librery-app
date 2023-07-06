import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Heading, Flex, Text, Input, Button, Toast } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useCreateUser } from "../hooks/useUser";

const AddUser = () => {
  const { getCreateUser } = useCreateUser();

  const [loadingSaved, setLoadingSaved] = useState(false)

  const router = useRouter();

  const toast = useToast();

  const [user, setUser] = useState({});

  const addUser = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const savedUser = async () => {
    setLoadingSaved(true)
    const res = await getCreateUser({
      variables: {
        user: { ...user },
      },
    });
    if (res) {
      if (res.errors) {
        toast({
          title: "THE_USER_COULD_NOT_BE_REGISTERED",
          description: `${res.message}`,
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
        setLoadingSaved(false)
      } else {
        toast({
          title: "SUCCESS",
          description: "USER_SUCCESSFULLY_REGISTERED",
          status: "success",
          duration: 1500,
          position: "top",
        });
        setLoadingSaved(false)
        router.push("/phrases");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Register and Login Library App</title>
      </Head>

      <Heading
        textAlign="center"
        backgroundColor="whiteAlpha.200"
        color="blackAlpha.500"
      >
        Register User
      </Heading>

      <Flex height="70vh" mt={20} alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading mb={6} textAlign="center">
            Add User in Library App
          </Heading>
          <div>
            <Text mb={6}>User's first name</Text>
            <Input
              placeholder="First name user"
              variant="filled"
              type="text"
              mb={6}
              onChange={(e) => addUser("firstName", e.target.value)}
            />
          </div>
          <div>
            <Text mb={6}>User's last name</Text>
            <Input
              placeholder="Last name user"
              variant="filled"
              type="text"
              mb={6}
              onChange={(e) => addUser("lastName", e.target.value)}
            />
          </div>
          <div>
            <Text mb={6}>User's age</Text>
            <Input
              placeholder="User's age"
              variant="filled"
              type="number"
              mb={6}
              onChange={(e) => addUser("age", parseInt(e.target.value))}
            />
          </div>
          <div>
            <Text mb={6}>User name</Text>
            <Input
              placeholder="Enter a user name"
              variant="filled"
              type="text"
              mb={6}
              onChange={(e) => addUser("userName", e.target.value)}
            />
          </div>
          <div>
            <Text mb={6}>User's email</Text>
            <Input
              placeholder="User's email"
              variant="filled"
              type="email"
              mb={6}
              onChange={(e) => addUser("email", e.target.value)}
            />
          </div>
          <div>
            <Text mb={6}>User password</Text>
            <Input
              placeholder="User password"
              variant="filled"
              type="password"
              mb={6}
              onChange={(e) => addUser("password", e.target.value)}
            />
          </div>
          <Button mb={6} colorScheme="teal" onClick={savedUser} disabled={loadingSaved}>
            Register User
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default AddUser;
