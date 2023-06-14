import React from "react";
import { useDataTable } from "@codecraftkit/hooks";
import { useState } from "react";
import { Table } from "@codecraftkit/core";
import { AUTHOR_LIST } from "../graphql/Author";
import { Grid, Button } from "@chakra-ui/react";
import { MdEditDocument } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import UpdateAuthor from "./FormUpdateAuthor";
import AuthorDelete from "./DeleteAuthor";

const ContainerListAuthors = () => {
  const [selected, setSelected] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [authorSelected, setAuthorSelected] = useState({})
  const [openUpdateAuthor, setOpenUpdateAuthor] = useState(false);
  const [openDeleteAuthor, setOpenDeleteAuthor] = useState(false);

  

  const openAuthorDelete = (author) => {
    setAuthorSelected(author)
    setOpenDeleteAuthor(true);
  };

  const closedAuthorDelete = () => {
    setOpenDeleteAuthor(false);
  };

  const openAuthorUpdateForm = (author) => {
    setAuthorSelected(author)
    setOpenUpdateAuthor(true);
  };

  const closedAuthorUpdateForm = () => {
    setOpenUpdateAuthor(false);
  };



  const initialValues = {}

  const head = [{
    field: 'firstName',
    label: 'FirstName Author'
  }, {
    field: 'lastName', 
    label: 'LastName Author'
  }, {
    field: 'fullName',
    label: 'FullName Author'
  }, {
    field: '_id',
    label: 'Author Id'
  }]

  const actions = [{
    color: 'blue', 
    label: 'UPDATE AUTHOR', 
    icon: <MdEditDocument />,
    handler: (author) => openAuthorUpdateForm(author)
  }, {
    color: 'red', 
    label: 'DELETE AUTHOR', 
    icon: <BsTrash />,
    handler: (author) => openAuthorDelete(author)
   
  }]

  const useDataTableProps = {
    initialValues, 
    limit: 10, 
    collection: 'Author',
    QUERY: AUTHOR_LIST
  }

  const [dataTable, paginate, filter, {refreshList}] = useDataTable(useDataTableProps)

  return (
    <Grid>
      <Table
      {...dataTable}
      head={head}
      actions={actions}
      selection
      selected={selected}
      setSelected={setSelected}
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
      />
      <UpdateAuthor openAuthorUpdateForm={openUpdateAuthor} auhtorSelected={authorSelected} refreshList={refreshList} closedAuthorUpdateForm={closedAuthorUpdateForm} />
      <AuthorDelete openAuthorDelete={openDeleteAuthor} authorSelected={authorSelected} refreshList={refreshList} closedAuthorDelete={closedAuthorDelete} />
    </Grid>
  )
}

export default ContainerListAuthors;