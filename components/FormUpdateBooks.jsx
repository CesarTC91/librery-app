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
  Select,
} from "@chakra-ui/react";
import { MdEditDocument } from "react-icons/md";
import { useState, useEffect } from "react";
import { useUpdateBook } from "../hooks/useBook";
import { useAuthorListByFullname } from "../hooks/useAuthor";

const FormUpdateBook = ({ book, getBooks }) => {
  const { getUpdateBook } = useUpdateBook();

  const { getAuthorsByFullname, loading, error, data: authorByFullNameList } = useAuthorListByFullname();

  const [updateBook, setUpdateBook] = useState({});

  const [selectBook, setSelectBook] = useState({})

  useEffect(() => {
    getAuthorsByFullname()
}, [getAuthorsByFullname])

  const bookUpdate = (field, value) => {
    setUpdateBook({ ...updateBook, [field]: value });
  };

  const bookSelect = (field, value) => {
    setSelectBook({...selectBook, [field]: value})
  }

  const bkUpdate = async () => {
    await getUpdateBook({
      variables: {
        book: updateBook,
      },
    }).then(getBooks)
    closedUpdateForm()
  };

  const [openFormUpdate, setOpenFormUpdate] = useState(false);

  const openUpdateForm = () => {
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
              textAlign="center"
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
                  <Text mb={6}>Id of the Book</Text>
                  <Input
                    placeholder="Id"
                    variant="filled"
                    mb={6}
                    type="text"
                    onChange={(e) => bookUpdate("_id", e.target.value)}
                  />
                </div>
                <div>
                  <Text mb={6}>Book Title</Text>
                  <Input
                    placeholder="Book Title"
                    variant="filled"
                    mb={6}
                    type="text"
                    onChange={(e) => bookUpdate("title", e.target.value)}
                  />
                </div>
                <div>
                  <Text mb={6}>Book Author</Text>
                  <Select
                    placeholder="Book Author"
                    variant="filled"
                    mb={6}
                    onChange={(e) => bookSelect("authorId", e.target.value)}
                  >
                    {authorByFullNameList["Authors"] &&
                      authorByFullNameList["Authors"].map(
                        (authorFullName, index) => {
                          return (
                            <option key={index} value={authorFullName._id}>
                              {authorFullName.fullName}
                            </option>
                          );
                        }
                      )}
                  </Select>
                </div>
                <Button mb={6} colorScheme="teal" onClick={bkUpdate}>
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
