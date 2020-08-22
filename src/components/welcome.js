import React from "react"
import { Image, Row, Col, Container } from "react-bootstrap"

import branding from "../../public/static/img/buckstarterimgs/branding.png"
import innovation from "../../public/static/img/buckstarterimgs/innovation.png"
import production from "../../public/static/img/buckstarterimgs/production.png"

import logo from "../../public/static/img/buckstarterimgs/s1_logo.png"

export default function Welcome(props) {
  return (
    <>
      <Container className="welcome vertical-center">
        <br /><br /><br /><br />
        <div className="justify-content-md-center text-center mx-auto">
          <div className="mt-5"></div>

          <h2 className="">Welcome to</h2>
          <Row className="">
            <Col xs={12} md={12} lg={12} xl={12}>
              <div className="mt-5"></div>
              <Image width={800} src={logo} fluid />
              <h2 className="text-center"
                data-sal-easing="ease">Branding Studio</h2>
              <br />
              </Col>
            </Row>
              <br />

        </div>

      </Container>
      <Container>

      <Col >
                <p className="text-justify" data-sal="fade" data-sal-delay="400"
                  data-sal-easing="ease" fluid>Buckstarter helps get brands going. We give businesses stronger points-of-view and bigger
                  presences in the marketplace, so they become more effective. We deliver deep branding
                  experience in a more efficient operating model we call a “branding studio” rather than an “advertising
                agency”.</p>
              </Col>
      </Container>

      <div className="shadow p-3 mb-5 bg-white rounded">
        <div className="grayboi"/*className="backTile " */>
          <div className="row mb-5 justify-content-center">
            <div className="col-md- text-center">
              <div className="mt-5"></div>
              <div className="mt-5"></div>
              <Container>
                <Col>
                  <Row>
                    <h1 className="mb-4 section-title text-center" >
                      We organize around your needs.
                </h1>
                  </Row>
                </Col>
              </Container>
            </div>
          </div>
          <Container>
            <Row>
              <Col xs={6} md={4} lg={4}>
                <Image src={branding} fluid />
                <p data-aos="fade-right" className="text-dark">
                  Brand narrative, advertising content
              </p>
              </Col>
              <Col xs={6} md={4} lg={4}>
                <Image src={innovation} fluid />
                <p data-aos="fade-up" className="text-dark">
                  Strategy, Design, Architecture, Purpose{" "}
                </p>
              </Col>
              <Col xs={8} md={4} lg={4}>
                <Image src={production} fluid />
                <p data-aos="fade-left" className="text-dark">
                  Content production: high end, ultra-efficient.{" "}
                </p>
              </Col>
              <br />
              <Container>
              <p className="text-justify"  data-sal="fade"  data-sal-delay="400"
  data-sal-easing="ease">We focus branding &amp; content engagements where &amp; when needed. We can plug and play
  around outages on marketing teams or take on the entire brand or content development
  process. We’re flexible. Whether its brand identity work, brand architecture, a new logo,
  tagline, or video, or a complete paid, owned &amp; earned content campaign, our work is designed
  to get brands moving.</p>
  </Container>
            
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
