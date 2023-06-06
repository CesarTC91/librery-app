import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDeleteAuthors } from "../hooks/useAuthor";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Text,
  Button,
  Flex,
  Input
} from "@chakra-ui/react";

const AuthorDelete = ({ author, getAuthors }) => {
  const [openDeleteAuthor, setOpenDeleteAuthor] = useState(false);

  const {getDeleteAuthor} = useDeleteAuthors()

  const [filter, setFilter] = useState({})

  const filterAuthorByIdForDelete = (_id) => {
    setFilter({...filter, _id: _id})
  }

  const openAuthorDelete = () => {
    setOpenDeleteAuthor(true);
  };

  const closedAuthorDelete = () => {
    setOpenDeleteAuthor(false);
  };

  const dltAuthor = async () => {
    console.log('RRRR')
    getDeleteAuthor({
      variables: {
        id: filter._id
      }
    }).then(getAuthors)
    closedAuthorDelete()
  }

  return (
    <>
      <Button onClick={() => openAuthorDelete(author)} mb={6} colorScheme="red">
        <BsTrash />
      </Button>

      <Modal isOpen={openDeleteAuthor} onClose={closedAuthorDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              textAlign="center"
              mb={6}
              backgroundColor="whiteAlpha.200"
              color="blackAlpha.500"
            >
              Delete Author
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex height="70vh" alignItems="center" justifyContent="center">
              <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <Input 
                alignItems="center"
                mb={6}
                variant="filled"
                value={filter?._id}
                onChange={(e) => filterAuthorByIdForDelete(e.target.value)}
                />
                <div>
                  <Button
                    alignItems="center"
                    mb={7}
                    p={5}
                    ml={2}
                    colorScheme="red"
                    onClick={dltAuthor}
                  >
                    Delete Author
                  </Button>
                </div>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closedAuthorDelete}>
              Closed Author Delete Modal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthorDelete;
