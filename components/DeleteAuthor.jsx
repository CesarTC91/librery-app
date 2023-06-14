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
} from "@chakra-ui/react";

const AuthorDelete = ({ authorSelected, refreshList, openAuthorDelete, closedAuthorDelete }) => {
  
  const {getDeleteAuthor} = useDeleteAuthors()

  const dltAuthor = async () => {
    getDeleteAuthor({
      variables: {
        id: [authorSelected?._id]
      }
    }).then(refreshList)
    closedAuthorDelete()
  }

  return (
    <>

      <Modal isOpen={openAuthorDelete} onClose={closedAuthorDelete}>
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
