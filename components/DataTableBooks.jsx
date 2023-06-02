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
import { useState } from "react";
import FormUpdateBook from "./FormUpdateBooks";
import DeleteBooks from "./DeleteBooks";
import { useBookList } from "../hooks/useBook";

const DataTableBooks = () => {
  const { loading, error, data, getBooks } = useBookList();

  const [filter, setFilter] = useState({});

  //(e) => filterBookByTitle(e.target.value)
  const filterBookByTitle = (title) => {
    setFilter({ ...filter, title: title });
  };


  const filterBookById = (_id) => {
    setFilter({ ...filter, _id: _id });
  };

  if (error) {
    return <p>No data found</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title of the Book</Th>
            <Th>Author of the Book</Th>
            <Th>Book ID</Th>
          </Tr>
          <Tr>
            <Th>
              <Input
                placeholder="filter for title"
                mb={4}
                value={filter?.title}
                onChange={(e) => filterBookByTitle(e.target.value)}
              />
            </Th>
            <Th>
              <Input
                placeholder="filter for id"
                mb={4}
                value={filter?._id}
                onChange={(e) => filterBookById(e.target.value)}
              />
            </Th>
            <Button
              mb={4}
              colorScheme="blue"
              onClick={() =>
                getBooks({
                  variables: {
                    filters: filter,
                  },
                })
              }
            >
              Filter
            </Button>
          </Tr>
        </Thead>
        <Tbody>
          {data["Books"] &&
            data["Books"].map((book) => {
              return (
                <Tr key={book._id}>
                  <Td>{book.title}</Td>
                  <Td>{book._id}</Td>
                  <Td>
                    <Grid
                      templateColumns="repeat(2, auto)"
                      gap={5}
                      justifyContent="flex-end"
                    >
                      <FormUpdateBook book={book} />
                      <DeleteBooks book={book} />
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
