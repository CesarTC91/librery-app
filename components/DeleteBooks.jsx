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

const DeleteBooks = ({ book }) => {
  const [openDeleteBook, setOpenDeleteBook] = useState(false);

  const [filter, setFilter] = useState({})

  const { getDeleteBook} = useDeleteBook();

  const filterIdBookForDelete =  (_id) => {
      setFilter({...filter, _id: _id})
  }

  const openBookDelete = () => {
    setOpenDeleteBook(true);
  };

  const closedBookDelete = () => {
    setOpenDeleteBook(false);
  };

  return (
    <>
      <Button onClick={() => openBookDelete(book)} mb={6} colorScheme="red">
        <BsTrash />
      </Button>
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
                <Input
                  alignItems="center"
                  mb={6}
                  variant="filled"
                  type="text"
                  value={filter?._id}
                  onChange={(e) => filterIdBookForDelete(e.target.value)}
                />
                <div>
                  <Button
                    alignItems="center"
                    colorScheme="red"
                    p={5}
                    mb={7}
                    ml={2}
                    onClick={() => {
                      getDeleteBook({
                        variables: {
                          id: filter._id
                        }
                      })
                    }}
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
