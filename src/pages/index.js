import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Cards from "../components/cards"
import Welcome from "../components/welcome"
import Clients from "../components/clients"
import Ending from "../components/ending"

import {bnc} from "./cards/bnc"
import {crowdster} from "./cards/crowdster"
import {ica} from "./cards/ica"
import {naturlich} from "./cards/naturlich"
import {dlaw} from "./cards/dlaw"
import {siggi} from "./cards/siggis"
import {upcycle} from "./cards/upcycle"
import {watergarden} from "./cards/watergarden"

import "./style.css" // Tell webpack that Button.js uses these styles
import { Container, Row, Image, Carousel } from "react-bootstrap"


export default function Home() {
  return (
    <>  
      <Welcome></Welcome>
      <Clients data-sal="slide-up"></Clients>
      <div className="mt-5"></div>
      <h1 className="text-center">The Work</h1>

      <Carousel>
        <Carousel.Item>
        <Container>
        <Row >
          {/* For the video links, only use the numbers at the end of the link */}
          <Cards tileTitle={ica.title} tileImage={ica.thumbnail} tileDescription = {ica.description} images= {ica.assets} videos={ica.videos}/>
          <Cards tileTitle={crowdster.title} tileImage={crowdster.thumbnail} tileDescription = {crowdster.description} images= {crowdster.assets} videos={[]}/>
          <Cards className="mx-auto d-block" tileTitle={bnc.title} tileImage={bnc.thumbnail} tileDescription = {bnc.description} images= {bnc.assets} videos={[]}/> 
        </Row>
        </Container>
        <div className="mt-5"></div>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
        <Row>
          <Cards tileTitle={naturlich.title} tileImage={naturlich.thumbnail} tileDescription = {naturlich.description} images= {naturlich.assets} videos={[]}/>
          <Cards tileTitle={dlaw.title} tileImage={dlaw.thumbnail} tileDescription = {dlaw.description} images= {dlaw.assets} videos={dlaw.videos}/>
          <Cards  tileTitle={siggi.title} tileImage={siggi.thumbnail} tileDescription = {siggi.description} images= {siggi.assets} videos={siggi.videos}/> 
        </Row>
        </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container>
        <Row>
          <Cards tileTitle={upcycle.title} tileImage={upcycle.thumbnail} tileDescription = {upcycle.description} images= {upcycle.assets} videos={[]} />
          <Cards tileTitle={watergarden.title} tileImage={watergarden.thumbnail} tileDescription = {watergarden.description} images= {watergarden.assets} videos={[]} />
        </Row>
        </Container>
        </Carousel.Item>
        </Carousel>

        <div className="mt-5"></div>
        <Ending></Ending>
    </>
  )
}
