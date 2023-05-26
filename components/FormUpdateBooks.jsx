import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  Flex,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { MdEditDocument } from "react-icons/md";
import { useState } from "react";

const FormUpdateBook = ({ book }) => {
  const [openFormUpdate, setOpenFormUpdate] = useState(false);

  const openUpdateForm = (book) => {
    setOpenFormUpdate(true);
  };

  const closedUpdateForm = () => {
    setOpenFormUpdate(false);
  };

  return (
    <>
      <Button onClick={() => openUpdateForm(book)} mb={6} colorScheme="blue">
        <MdEditDocument />
      </Button>
      <Modal isOpen={openFormUpdate} onClose={closedUpdateForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              mb={6}
              backgroundColor={"whiteAlpha.200"}
              color={"blackAlpha.500"}
            >
              Update Books
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex height="70vh" alignItems="center" justifyContent="center">
              <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <div>
                  <Text mb={6}>Book Name</Text>
                  <Input
                    placeholder="Book Name"
                    variant="filled"
                    mb={6}
                    type="text"
                  />
                </div>
                <div>
                  <Text mb={6}>Author</Text>
                  <Input
                    placeholder="Author"
                    variant="filled"
                    mb={6}
                    type="text"
                  />
                </div>
                <div>
                  <Text mb={6}>Date of Publication</Text>
                  <Input variant="filled" mb={6} type="date" />
                </div>
                <div>
                  <Text mb={6}>House Publisher</Text>
                  <Input
                    placeholder="House Publisher"
                    variant="filled"
                    mb={6}
                    type="text"
                  />
                </div>
                <Button mb={6} colorScheme="teal">
                  Update Book
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closedUpdateForm}>
              Closed Form
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormUpdateBook;
