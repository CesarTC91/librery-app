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
import UpdateAuthor from "./FormUpdateAuthor";
import AuthorDelete from "./DeleteAuthor";
import { useAuthorList } from "../hooks/useAuthor";
import { useState } from "react";

const DataTableAuthors = () => {
  const { loading, error, data, getAuthors } = useAuthorList();

  const [filter, setFilter] = useState({});


  const filterAuthorByFirstName = (firstName) => {
    setFilter({ ...filter, firstName: firstName });
  };

  const filterAuthorByLastName = (lastName) => {
    setFilter({ ...filter, lastName: lastName });
  };

  if (error) {
    return <p>No data found</p>;
  }

  if (loading) {
    return <p>Loading Author Data </p>;
  }

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Full Name of the Author</Th>
            <Th>First Name of the Author</Th>
            <Th>Last Name of the Author</Th>
          </Tr>
          <Tr>
            <Th>
              <Input
                placeholder="Filter for Firstname"
                mb={4}
                value={filter?.firstName}
                onChange={(e) => filterAuthorByFirstName(e.target.value)}
              />
            </Th>
            <Th>
              <Input
                placeholder="Filter for Lastname"
                mb={4}
                value={filter?.lastName}
                onChange={(e) => filterAuthorByLastName(e.target.value)}
              />
            </Th>
            <Button
              mb={4}
              colorScheme="green"
              onClick={() =>
                getAuthors({
                  variables: {
                    filters: filter,
                  },
                })
              }
            >
              Filter Author
            </Button>
          </Tr>
        </Thead>
        <Tbody>
          {data["Authors"] &&
            data["Authors"].map((author) => {
              return (
                <Tr key={author._id}>
                  <Td>{author.fullName}</Td>
                  <Td>{author.firstName}</Td>
                  <Td>{author.lastName}</Td>
                  <Td>
                    <Grid
                      templateColumns="repeat(2, auto)"
                      gap={5}
                      justifyContent="flex-end"
                    >
                      <UpdateAuthor author={author} />
                      <AuthorDelete author={author} />
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

export default DataTableAuthors;
