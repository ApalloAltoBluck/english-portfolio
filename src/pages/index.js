import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "../components/cards";
import Welcome from "../components/welcome";
import Clients from "../components/clients";
import Ending from "../components/ending";

import { bnc } from "./cards/bnc";
import { crowdster } from "./cards/crowdster";
import { ica } from "./cards/ica";
import { naturlich } from "./cards/naturlich";
import { dlaw } from "./cards/dlaw";
import { siggi } from "./cards/siggis";
import { upcycle } from "./cards/upcycle";
import { watergarden } from "./cards/watergarden";

import "./style.css"; // Tell webpack that Button.js uses these styles
import { Container, Row, Image, Carousel, Col, Figure } from "react-bootstrap";

import field from "../../public/static/img/buckstarterimgs/logofield.png"

export default function Home() {
  return (
    <>
      <Welcome></Welcome>
      <div id="parallax-world-of-ugg">
        <div className="parallax-one">
          <Container>
            <h1 className="hiveOperate text-center">We operate as a hive</h1>
            <p className="hiveOperateSmall text-center">
              As a branding studio, we relentlessly focus on the end-product,
              the quality of the output. We cherry-pick the best designers,
              strategists, creative directors, media planners or buyers,
              producers, or directors needed to get the job done well. We swarm
              just the right talent around the brand. And we work fast, with
              little to no waste.
            </p>
            '
          </Container>
        </div>
      </div>
      <Container>
      <div className="">
              <br />
              <h2 className="text-center">The Work</h2>
              <Col lg={6} xl={8} className="mx-auto">
                <br />
                <p className="existance text-center">
                  Why should a brand exist? What purpose does it serve? Where is
                  its heat? This is a craft of careful identification and
                  distillation. Our work shares three common principles:
                  <br />
                  <i>Simplicity, Clarity, Allure.</i>
                </p>
                <Row xl={7}>
          <Row xl={4} >
            {/* For the video links, only use the numbers at the end of the link */}
            <Cards
              className=""
              tileTitle={"Black News Channel"}
              tileImage={bnc.thumbnail}
              tileDescription={bnc.description}
              images={bnc.assets}
              videos={[]}
              fluid
            />

            <Cards
              tileImage={siggi.thumbnail}
              tileDescription={siggi.description}
              tileTitle={"Siggi's"}
              images={siggi.assets}
              videos={siggi.videos}
              className="my-auto"
              fluid
            />    
            <Cards
              tileImage={naturlich.thumbnail}
              tileTitle={"Naturlich"}
              tileDescription={naturlich.description}
              images={naturlich.assets}
              videos={[]}
              fluid
            />


            <Cards
              tileImage={dlaw.thumbnail}
              tileTitle={"Amy D'Agastino Law"}
              tileDescription={dlaw.description}
              images={dlaw.assets}
              videos={dlaw.videos}
              fluid
            />

<Cards
              tileImage={upcycle.thumbnail}
              tileTitle={"Upcycle"}
              tileDescription={upcycle.description}
              images={upcycle.assets}
              videos={[]}
              fluid
            />


            <Cards
              tileImage={ica.thumbnail}
              tileTitle={"International Copper Association"}
              tileDescription={ica.description}
              images={ica.assets}
              videos={ica.videos}
              fluid
            />

            <Cards
              tileImage={crowdster.thumbnail}
              tileTitle={"Crowdster"}
              tileDescription={crowdster.description}
              images={crowdster.assets}
              videos={[]}
              fluid
            />

            <Cards
              tileTitle={"Watergarden"}
              tileImage={watergarden.thumbnail}
              tileDescription={watergarden.description}
              images={watergarden.assets}
              videos={[]}
              fluid
            />
          </Row>
        </Row>
                <hr />
                <h3 className="text-center">Past experience</h3>
              </Col>
            </div>
      <Image src={field} width="60%" fluid /> 
      {/* <Row xl={7}>
        <div className="text-center" >
          <p>We’ve packed 30 years of brand-building experience with some of the worlds
    most cherished brands &amp; companies into a more nimble and efficient operating model
    for today.</p>
        </div>
        </Row> */}
        
      </Container>

      <Clients data-sal="slide-up"></Clients>

      <Ending></Ending>
    </>
  );
}
