

import React from 'react';
import { Page, Navbar, Button,
  List,
  ListInput,
  BlockHeader,
  BlockTitle,
  ListItem,
  ListItemRow,
  Toggle,
  ListItemCell,
  Icon,
  Block,
  Row,
  Col,
  Card,
  CardContent,
  CardFooter } from 'framework7-react';

export default ({ f7route }) => {
  return (
    <Page>
      <Navbar title={`Detail Page ${f7route.params.id}`} backLink="Back"></Navbar>
      <BlockTitle medium>Pubblica annuncio</BlockTitle>
            <Card>
              <CardContent>
                <BlockTitle>Pubblica annuncio su resthotels</BlockTitle>
                <BlockHeader>
                  Il tuo annuncio verrà esaminato dal nostro staff prima di
                  essere online.
                </BlockHeader>
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
              <CardFooter>
                <Button fill>
                  Continua
                </Button>
              </CardFooter>
            </Card>
    </Page>
  );
};