import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDeleteBook } from "../hooks/useBook";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

const DeleteBooks = ({  bookSelected, refreshList, openDeleteBook, closedBookDelete }) => {
  
  const { getDeleteBook} = useDeleteBook();



  const dltBook = async () => {
    await getDeleteBook({
      variables: {
        id: [bookSelected?._id]
      }
    }).then(refreshList)
    closedBookDelete()
  }

  return (
    <>
      <Modal isOpen={openDeleteBook} onClose={closedBookDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              textAlign="center"
              mb={6}
              backgroundColor="whiteAlpha.200"
              color="blackAlpha.500"
            >
              Delete Books
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex height="70vh" alignItems="center" justifyContent="center">
              <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <div>
                  <Button
                    alignItems="center"
                    colorScheme="red"
                    p={5}
                    mb={7}
                    ml={2}
                    onClick={dltBook}
                  >
                    Delete Book
                  </Button>
                </div>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closedBookDelete}>
              Closed Delete Modal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteBooks;
