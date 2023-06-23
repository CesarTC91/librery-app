import Head from "next/head";
import { Heading, Flex, Input, Button, Text, Select } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useAuthorListByFullname } from "../hooks/useAuthor";
import { useCreateAndUptadeBook } from "../hooks/useBook";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export default function AddBook() {
  const {
    getAuthorsByFullname,
    loading,
    error,
    data: authorByFullNameList,
  } = useAuthorListByFullname();

  const toast = useToast();

  const {
    getCreateAndUpdateBook,
    loading: loadingCreate,
    error: errorCreate,
    data,
  } = useCreateAndUptadeBook();

  const [book, setBook] = useState({});

  const addBook = (field, value) => {
    setBook({ ...book, [field]: value });
  };

  const savedBook = async () => {
    const res = await getCreateAndUpdateBook({
      variables: {
        book: { ...book, _id: "" },
      },
    });
    if (res) {
      if (res.errors) {
        toast({
          title: "THE_BOOK_COULD_NOT_BE_ADDED",
          description: `${res.message}`,
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "SUCCESS",
          description: "THE_BOOK_IS_ADDED",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  useEffect(() => {
    getAuthorsByFullname();
  }, [getAuthorsByFullname]);

  if (loadingCreate) {
    return <p>Creating The Book Data</p>;
  }

  if (errorCreate) {
    return <p>Error Creating Book Data</p>;
  }


  return (
    <>
      <Head>
        <title>Add Book - Library Appp</title>
      </Head>

      <Heading
        textAlign="center"
        backgroundColor="whiteAlpha.200"
        color="blackAlpha.500"
      >
        Add Book To Library App
      </Heading>
      <Navbar />

      <Flex height="70vh" mt={20} alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading mb={6} textAlign="center">
            Add Book To Library
          </Heading>
          <div>
            <Text mb={6}>Book Title</Text>
            <Input
              placeholder="Book Title"
              variant="filled"
              mb={6}
              type="text"
              onChange={(e) => addBook("title", e.target.value)}
            />
          </div>
          <div>
            <Text mb={6}>Book Author</Text>
            <Select
              placeholder="Book Author"
              variant="filled"
              mb={6}
              onChange={(e) => addBook("authorId", e.target.value)}
            >
              {authorByFullNameList["Author"] &&
                authorByFullNameList["Author"].map((authorFullName, index) => {
                  return (
                    <option key={index} value={authorFullName._id}>
                      {authorFullName.fullName}
                    </option>
                  );
                })}
            </Select>
          </div>
          <Button mb={6} colorScheme="teal" onClick={savedBook}>
            Add Book
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

