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
import { useEffect, useState } from "react";
import { useCreateAndUpdateAuthor } from "../hooks/useAuthor";

const UpdateAuthor = ({ auhtorSelected, refreshList, openAuthorUpdateForm, closedAuthorUpdateForm }) => {
  const { getCreateAndUpdateAuthor } = useCreateAndUpdateAuthor();

  const [updateAuthor, setUpdateAuthor] = useState({});

  const authorUpdate = (field, value) => {
    setUpdateAuthor({ ...updateAuthor, [field]: value });
  };

  const authUpdate = async () => {
    await getCreateAndUpdateAuthor({
      variables: {
        author: updateAuthor,
      },
    }).then(refreshList);
    closedAuthorUpdateForm();
  };

  useEffect(() => {
    setUpdateAuthor({
      _id: auhtorSelected?._id, 
      firstName: auhtorSelected?.firstName,
      lastName: auhtorSelected?.lastName
    })
  }, [auhtorSelected?._id])

  return (
    <>
      <Modal isOpen={openAuthorUpdateForm} onClose={closedAuthorUpdateForm}>
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
                    onChange={(e) => authorUpdate("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <Text mb={6}>Last Name of the Author</Text>
                  <Input
                    placeholder="Lastname of the Author"
                    variant="filled"
                    mb={6}
                    type="text"
                    onChange={(e) => authorUpdate("lastName", e.target.value)}
                  />
                </div>
                <Button mb={6} colorScheme="teal" onClick={authUpdate}>
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
