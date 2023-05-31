import { useState } from "react";
import { BsTrash } from "react-icons/bs";
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
} from "@chakra-ui/react";

const DeleteBooks = ({ book }) => {
  const [openDeleteBook, setOpenDeleteBook] = useState(false);

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
                <Text textAlign="center" mb={6} backgroundColor="whiteAlpha.200" color="blackAlpha.500">
                    Delete Books
                </Text>
            </ModalHeader>
            <ModalBody>
                <Flex height="70vh" alignItems="center" justifyContent="center">
                    <Flex direction="column" background="gray.100" p={12} rounded={6}>
                        <div>
                        <Button colorScheme="red" p={5} mb={7} ml={2}>Delete Book</Button>
                        <Button colorScheme="gray" mb={6}>Cancel Delete</Button>
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
