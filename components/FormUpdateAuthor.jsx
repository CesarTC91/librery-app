import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Text,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { MdEditDocument } from "react-icons/md";
import { useState } from "react";

const UpdateAuthor = ({ author }) => {
  const [openUpdateAuthor, setOpenUpdateAuthor] = useState(false);

  const openAuthorUpdateForm = () => {
    setOpenUpdateAuthor(true);
  };

  const closedAuthorUpdateForm = () => {
    setOpenUpdateAuthor(false);
  };

  return (
    <>
      <Button
        onClick={() => openAuthorUpdateForm(author)}
        mb={6}
        colorScheme="blue"
      >
        <MdEditDocument />
      </Button>

      <Modal isOpen={openUpdateAuthor} onClose={closedAuthorUpdateForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              textAlign="center"
              mb={6}
              backgroundColor="whiteAlpha.200"
              color="blackAlpha.500"
            >
              Update Author
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex height="70vh" alignItems="center" justifyContent="center">
              <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <div>
                  <Text mb={6}>First Name of the Author</Text>
                  <Input
                    placeholder="Firstname of the Author"
                    variant="filled"
                    mb={6}
                    type="text"
                  />
                </div>
                <div>
                  <Text mb={6}>Last Name of the Author</Text>
                  <Input
                    placeholder="Lastname of the Author"
                    variant="filled"
                    mb={6}
                    type="text"
                  />
                </div>
                <Button mb={6} colorScheme="teal">
                  Update Author
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closedAuthorUpdateForm}>
              Closed Update Author Form
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateAuthor;
