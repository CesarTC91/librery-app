import React from "react";
import {useDataTable} from '@codecraftkit/hooks'
import { useState } from "react";
import { useDeleteAllBooks } from "../hooks/useBook";
import {Table} from '@codecraftkit/core'
import { BOOK_LIST } from "../graphql/Book";
import { Grid, Button } from "@chakra-ui/react";
import { MdEditDocument } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import {GiBookCover} from 'react-icons/gi'
import FormUpdateBook from "./FormUpdateBooks";
import DeleteBooks from "./DeleteBooks";

const ContainerListBook = () => {
  const [openFormUpdate, setOpenFormUpdate] = useState(false);
  const [openDeleteBook, setOpenDeleteBook] = useState(false);
  const [bookSelected, setBookSelected] = useState({})
  const [selected, setSelected] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const {getDeleteAllBooks} = useDeleteAllBooks()
 
  
  const openUpdateForm = (book) => {
    setBookSelected(book)
    setOpenFormUpdate(true);
  };

  const openBookDelete = (book) => {
    setBookSelected(book)
    setOpenDeleteBook(true);
  };

  const closedBookDelete = () => {
    setOpenDeleteBook(false);
  };

  const closedUpdateForm = () => {
    setOpenFormUpdate(false);
  };

  const deleteAllBooks = async () => {
    if(selectedRows.length > 0 && selected.length > 0){
      await getDeleteAllBooks({
        variables: {
          id: selected
        }
      }).then(refreshList)
    }else{
      setSelected([])
      setSelectedRows([])
    }
  }



  const initialValues = {}
  
  const head = [{
    field: 'title',
    label: 'Book Title'
  }, {
    field: 'author.fullName', 
    label: 'Book Author'
  },{
    field: '_id',
    label: 'Book Id'
  }]
  const actions = [{
    color: 'blue', 
    label: 'UPDATE', 
    icon: <MdEditDocument />,
    handler: (book) => openUpdateForm(book) 
  },
  {
    color: 'red', 
    label: 'DELETE',
    icon: <BsTrash />,
    handler: (book) => openBookDelete(book)
  }
  ]

  const useDataTableProps = {
    initialValues, 
    limit: 10,
    collection: 'Book', 
    QUERY: BOOK_LIST
  }

  const [dataTable, paginate, filter, {refreshList}] = useDataTable(useDataTableProps)

  return (
    <Grid>
      <Button  width={40} marginLeft={1} colorScheme="red" onClick={deleteAllBooks}>
        Delete All Books
      </Button>
        <Table {...dataTable}
        head={head}
        actions={actions}
        selection
        selected={selected}
        setSelected={setSelected}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}   />
        <FormUpdateBook openFormUpdate={openFormUpdate} bookSelected={bookSelected} refreshList={refreshList} closedUpdateForm={closedUpdateForm} />
        <DeleteBooks openDeleteBook={openDeleteBook} bookSelected={bookSelected} refreshList={refreshList} closedBookDelete={closedBookDelete} />
    </Grid>
  )
}

export default ContainerListBook