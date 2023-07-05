import { Card, CardBody, CardFooter, Button, ButtonGroup, Image } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineDislike, AiOutlineHeart } from "react-icons/ai"


const Cards = (props) => {
  const {src} = props
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)


  const handleLikeClick = () => {
    setLikes(likes + 1)
  }

  const handleDislikeClick = () => {
    setDislikes(dislikes + 1)
  }

  return(
      <Card maxW="sm" display="flex" flexDirection="row">
            <CardBody>
              <Image
                src={src}
                alt="Cortazar1"
                borderRadius="lg"
              />
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="pink" onClick={handleLikeClick}>
                  <AiOutlineHeart />
                  <p>{likes}</p>
                </Button>
                <Button variant="solid" colorScheme="red" onClick={handleDislikeClick}>
                  <AiOutlineDislike />
                  <p>{dislikes}</p>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
  )
}

export default Cards
