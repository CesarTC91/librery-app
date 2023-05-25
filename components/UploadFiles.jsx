import React from "react";
import {Box, Button} from '@chakra-ui/react'

const SearchCoverFile = ({ onFileChange }) => {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onFileChange(file)
    };

    return(
        <Box>
            <input type="file" id="file-input" onChange={handleFileChange} style={{display: 'none'}} />
            <Button as="label" htmlFor="file-input">Select File</Button>
        </Box>
    )
}

export default SearchCoverFile