import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";


const CoversBooks = ({isOpen, closedModal, cover}) => {


  return (
    <>
      <Modal isOpen={isOpen} OnClose={closedModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Covers  Books</ModalHeader>
          <ModalBody>
          <Card mb={6}>
                  <CardHeader>
                    <Text as="h2" textAlign="center">
                      {cover.title}
                    </Text>
                  </CardHeader>
                  <CardBody>
                    <Image
                      src={cover.image}
                      alt={cover.title}
                      width={500}
                      height={500}
                    />
                  </CardBody>
                  <CardFooter>
                    <Text as="h4" textAlign="center">
                      {cover.author}
                    </Text>
                  </CardFooter>
                </Card>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closedModal}>
              Closed Modal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CoversBooks;
