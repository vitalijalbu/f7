import React, { useEffect, useState } from "react";
import { Page, Button, List, ListInput, BlockTitle, ListItem, ListItemRow, Toggle, ListItemCell,  Icon, BlockHeader, Block, Row, Col, Card, CardContent, CardFooter } from "framework7-react";
import SidePanel from "components/Hosting/SidePanel";
import {useDropzone} from 'react-dropzone';

const Planimetry = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
       <BlockTitle>Foto Pianimetria</BlockTitle>
              <BlockHeader>
                Il tuo annuncio verrà esaminato dal nostro staff prima di
                essere online.
              </BlockHeader>
              <Block>
        <Card className="bordered">
            <CardContent>
              <BlockTitle>Pubblica annuncio su resthotels</BlockTitle>
              <BlockHeader>
                Il tuo annuncio verrà esaminato dal nostro staff prima di
                essere online.
              </BlockHeader>
              <section className="grid">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
            </CardContent>
            <CardFooter className="align-content-space-between">
            <Button outline>
              Indietro
            </Button>
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
  };

export default Planimetry;
