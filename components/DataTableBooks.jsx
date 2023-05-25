import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Button,
  Grid,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import {FiArrowDownCircle} from 'react-icons/fi'
import { useState } from "react";
import CoversBooks from "../components/CoversBooks";

const booksData = [
  {
    id: 1,
    title: "El Tunel de las Almas Perdidas",
    author: "Mara Urnoba",
    publicationDate: "10-03-2018",
    image: "/img/El_Tunel_De_Las_Almas_Perdidas.jpg",
    publisher: "Independently published",
  },
  {
    id: 2,
    title: "Cien años de Soledad",
    author: "Gabriel Garcia Marquez",
    publicationDate: "05-06-1967",
    image: "/img/Cien_Años_De_Soledad.jpg",
    publisher: "Editorial Sudamericana",
  },
  {
    id: 3,
    title: "Ciudad Medialuna",
    author: "Sarah J. Maas",
    publicationDate: "03-03-2020",
    image: "/img/Ciudad_Medialuna.jpg",
    publisher: "Alfaguara",
  },
  {
    id: 4,
    title: "Todo lo que fuimos juntos",
    author: "Alice Kellen",
    publicationDate: "14-11-2019",
    image: "/img/Todo_Lo_Que_Fuimos_Juntos.jpg",
    publisher: "Editorial Planeta",
  },
];



const DataTableBooks = () => {
  const [filter, setFilter] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [coverSelect, setCoverSelect] = useState({})

  const openModal = (book) => {
    console.log('Cover')
    setIsOpen(true);
    setCoverSelect(book);
  };


  const closedModal = () => {
    setIsOpen(false);
  };

  const filterBooks = booksData.filter(
    (book) =>
      book.author.toLowerCase().includes(filter.toLowerCase()) ||
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.publicationDate.toLowerCase().includes(filter.toLowerCase()) ||
      book.publisher.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      <Input
        placeholder="Search Book"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        mb={4}
      />
      <Table  variant="simple">
        <Thead>
          <Tr>
            <Th>Author</Th>
            <Th>Title of the Book</Th>
            <Th>Publication Date</Th>
            <Th>House Publisher of the Book</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filterBooks.map((book) => {
            return (
              <Tr key={book.id}>
                <Td>{book.author}</Td>
                <Td>{book.title}</Td>
                <Td>{book.publicationDate}</Td>
                <Td>{book.publisher}</Td>
                <Td>
                  <Grid
                    templateColumns="repeat(4, auto)"
                    gap={4}
                    justifyContent="flex-end"
                  >
                    <Button mb={6} colorScheme="blue">
                      <MdEditDocument />
                    </Button>
                    <Button mb={6} colorScheme="red">
                      <BsTrash />
                    </Button>
                    <Button onClick={() => openModal(book)} mb={6} colorScheme="teal">
                      <GiBookCover />
                      <CoversBooks isOpen={isOpen} cover={coverSelect} closedModal={closedModal} />
                    </Button>
                    <Button mb={6} colorScheme="green">
                        <FiArrowDownCircle />
                    </Button>
                  </Grid>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTableBooks;
