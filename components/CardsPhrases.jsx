import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Grid,
  GridItem,
  Heading
} from "@chakra-ui/react";

import Cards from "./Cards";


const CardsPhrases = () => {
  


  return (
    <>
    <Heading
        textAlign="center"
        backgroundColor="whiteAlpha.200"
        color="blackAlpha.500"
      >
        Cards Phrases
      </Heading>
      <br />
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <GridItem>
          <Cards src="https://www.psicoactiva.com/wp-content/uploads/blog/2019/01/julio-cortazar11.jpg" />
        </GridItem>

        <GridItem>
          <Cards src="https://cdn.buenavibra.es/wp-content/uploads/2019/02/12112230/frases-de-cort%C3%A1zar.jpg" />
        </GridItem>

        <GridItem>
          <Cards src="https://cdn0.frasess.net/es/posts/6/0/4/y_yo_te_siento_temblar_contra_mi_como_una_luna_en_el_agua_406_33_600.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://img.europapress.es/fotoweb/fotonoticia_20170212084857_1200.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://4.bp.blogspot.com/-UmTehFe-ZoA/WsjYyGwO2KI/AAAAAAAAhGQ/JJPCqjwURUwst0bMHL5SE6DRsJUYswmmgCLcBGAs/w1200-h630-p-k-no-nu/CFS3.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://www.psicoactiva.com/wp-content/uploads/2016/10/gabriel-garcia-marquez.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://1.bp.blogspot.com/-oBtU-xkqZfk/Xv_MDQ29tcI/AAAAAAABCQ0/xBXEKVUPFlk0nkwwuaBVMfKvMvukGdMUQCLcBGAsYHQ/w1200-h630-p-k-no-nu/frases-Gabriel-Garcia-Marquez-por.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://lamenteesmaravillosa.com/wp-content/uploads/2015/04/29.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://cdn0.frasess.net/es/posts/8/4/2/puedes_ser_solamente_una_persona_para_el_mundo_pero_para_una_persona_tu_eres_el_mundo_248_11_600.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://www.intentarlo.com/wp-content/uploads/2018/03/frases-de-los-pilares-de-la-Tierra.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://www.euroresidentes.com/entretenimiento/frases-citas-imagenes/wp-content/uploads/sites/7/2014/02/Frases-de-Ken-Follet-euroresidentes.jpg"/>
        </GridItem>

        <GridItem>
          <Cards src="https://akifrases.com/frases-imagenes/frase-todos-toman-lo-que-les-conviene-de-las-ensenanzas-de-la-iglesia-y-dejan-de-lado-aquello-que-no-se-ken-follett-191765.jpg"/>
        </GridItem>
      </Grid>
    </>
  );
};

export default CardsPhrases;
