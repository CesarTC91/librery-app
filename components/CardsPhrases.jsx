import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Box,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { AiOutlineDislike, AiOutlineHeart } from "react-icons/ai";

const CardsPhrases = () => {
  return (
    <>
      <Flex>
        <Box mr={4}>
          <Card maxW="sm" display="flex" flexDirection="row">
            <CardBody>
              <Image
                src="https://www.psicoactiva.com/wp-content/uploads/blog/2019/01/julio-cortazar11.jpg"
                alt="Cortazar1"
                borderRadius="lg"
              />
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="pink">
                  <AiOutlineHeart />
                </Button>
                <Button variant="solid" colorScheme="red">
                  <AiOutlineDislike />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>

        <Box mr={4}>
          <Card maxW="sm" display="flex" flexDirection="row">
            <CardBody>
              <Image
                src="https://cdn.buenavibra.es/wp-content/uploads/2019/02/12112230/frases-de-cort%C3%A1zar.jpg"
                alt="Cortazar2"
                borderRadius="lg"
              />
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="pink">
                  <AiOutlineHeart />
                </Button>
                <Button variant="solid" colorScheme="red">
                  <AiOutlineDislike />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        
        <Box mr={4}>
          <Card maxW="sm" display="flex" flexDirection="row">
            <CardBody>
              <Image
                src="https://muhimu.es/wp-content/uploads/2017/09/cortazar1_vf.jpg"
                alt="Cortazar3"
                borderRadius="lg"
              />
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="pink">
                  <AiOutlineHeart />
                </Button>
                <Button variant="solid" colorScheme="red">
                  <AiOutlineDislike />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </>
  );
};

export default CardsPhrases;
