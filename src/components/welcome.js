import React from "react"
import { Image, Row, Col, Container } from "react-bootstrap"

import branding from "../../public/static/img/buckstarterimgs/branding.png"
import innovation from "../../public/static/img/buckstarterimgs/innovation.png"
import production from "../../public/static/img/buckstarterimgs/production.png"

import logo from "../../public/static/img/buckstarterimgs/s1_logo.png"

export default function Welcome(props) {
  return (
    <>
      <Container>
        <div className="mt-5"></div>
        <h1 className="text-center">Welcome to</h1>
        <Row className="justify-content-md-center">
          <Col xs={8} md={8} lg={12}>
            <Image  src={logo} fluid />
          </Col>
        </Row>
      </Container>
      <div className="shadow p-3 mb-5 bg-white rounded">
      <div className="grayboi"/*className="backTile " */>
          <div className="row mb-5 justify-content-center" data-aos="fade-up">
            <div className="col-md- text-center">
              <div className="mt-5"></div>
              <div className="mt-5"></div>
              <Container>
              <Col>
                <Row>
                <h1 className="mb-4 section-title" >
                  Buckstarter creates deep branding talent when & where needed
                </h1>
                </Row>
              </Col>
              </Container>
            </div>
          </div>
          <Container>
          <Row>
            <Col>
              <Image src={branding} fluid />
              <p data-aos="fade-right" className="text-dark">
                Brand narrative, advertising content
              </p>
            </Col>

            <Col>
              <Image src={innovation} fluid/>
              <p data-aos="fade-up" className="text-dark">
                Strategy, Design, Architecture, Purpose{" "}
              </p>
            </Col>

            <Col>
              <Image src={production} fluid/>
              <p data-aos="fade-left" className="text-dark">
                Content production: high end, ultra-efficient.{" "}
              </p>
            </Col>
            
        </Row>
        &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;&nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
        </Container>
        
      </div>
      </div>
    </>
  )
}
