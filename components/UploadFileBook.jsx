import React from 'react';
import {Box, Button} from '@chakra-ui/react';

const UploadBookFile = ({onBookChange}) => {
    const handleBookChage = (event) => {
        const fileBook = event.target.files[0];
        onBookChange(fileBook);
    };

    return(
        <Box>
            <input type='file' id='file-book' onChange={handleBookChage} style={{display: 'none'}} />
            <Button as="label" htmlFor='file-book'>Select Book File</Button>
        </Box>
    )
}

export default UploadBookFile