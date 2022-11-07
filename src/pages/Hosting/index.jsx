import React from "react";
import {
  View,
  Page,
  Block,
  BlockTitle,
  BlockHeader,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  ListInput,
  Toggle,
  Button,
  List,
  ListItem,
  Panel,
  Icon,
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "framework7-react";
import SidePanel from "components/Hosting/SidePanel";



const Hosting = () => (
  <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
        <BlockTitle>Informazioni di base dell'annuncio</BlockTitle>
              <BlockHeader>
                Il tuo annuncio verrà esaminato dal nostro staff prima di
                essere online.
              </BlockHeader>
        <Block>
          <Card className="bordered">
            <CardContent>
              <BlockTitle>Seleziona tipo di annuncio</BlockTitle>
              <List>
                <ListItem
                  radio
                  radioIcon="start"
                  title="Hotel"
                  value="hotel"
                  name="type"
                  defaultChecked
                ></ListItem>
                <ListItem
                  radio
                  radioIcon="start"
                  title="Ristorante"
                  value="restaurant"
                  name="type"
                ></ListItem>
                <ListItem
                  radio
                  radioIcon="start"
                  title="Commerciale"
                  value="commercial"
                  name="type"
                ></ListItem>
              </List>
            </CardContent> 
            <CardContent>
              <BlockTitle>Titolo e descizione</BlockTitle>
              <BlockHeader>Descrivi la tua proprietà</BlockHeader>
              <List>
                <ListInput
                  label="Titolo annuncio"
                  type="text"
                  naeme="title"
                  outline
                  floatingLabel
                  clearButton
                />
                <ListInput
                  label="Descizione breve"
                  type="text"
                  info="Massimo 80 caratteri"
                  clearButton
                  outline
                  floatingLabel
                />
                <ListInput
                  label="Descizione completa"
                  type="textarea"
                  info="Almeno 200 caratteri"
                  outline
                  floatingLabel
                  clearButton
                />
              </List>
            </CardContent>
            <BlockTitle>Stato dell'annuncio</BlockTitle>
              <CardContent>
              <List>
                <ListItem
                  radio
                  radioIcon="online"
                  title="Pubblicato"
                  value="hotel"
                  name="draft"
                  defaultChecked
                ></ListItem>
                <ListItem
                  radio
                  radioIcon="start"
                  title="Nascosto"
                  value="draft"
                  name="draft"
                ></ListItem>
              </List>
            </CardContent>
            <CardFooter>
              <Button fill>
                Continua
              </Button>
            </CardFooter>
          </Card>
          </Block>
        </div>
      </div>
    </div>
            </Page>
);

export default Hosting;
