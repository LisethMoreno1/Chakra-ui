import React from "react";
import "./header.css";
import { Center } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function Header() {
  return (
    <div className="App">
      <header className="barra">
        <div className="btn-item">
          <Heading as="h1" size="4xl" noOfLines={1}>
            <Center h="100px" color="white">
              DOMINA EL TERRENO
            </Center>
          </Heading>

          <a href="#" className="btn-trasparente secundary round">
            Ver Detalles
          </a>
          <a href="#" className="btn-trasparente round">
            Ver Video
          </a>
        </div>
      </header>

      <div className="Segunda">
        <div className="btn-item">
          <Heading as="h1" size="4xl" noOfLines={1}>
            <Center h="100px" color="white">
              DOMINA EL TERRENO
            </Center>
          </Heading>
          <a href="#" className="btn-primary secundary round">
            Ver Detalles
          </a>
          <a href="#" className="btn-primary secundary round">
            Ver Video
          </a>
        </div>
      </div>
    </div>
  );
}
