import React from "react"
import { Container, Image, Row, Col } from "react-bootstrap"

import one from "../../public/static/img/buckstarterimgs/icons/1.png"
import two from "../../public/static/img/buckstarterimgs/icons/2.png"
import three from "../../public/static/img/buckstarterimgs/icons/3.jpg"
import four from "../../public/static/img/buckstarterimgs/icons/4.png"
import five from "../../public/static/img/buckstarterimgs/icons/5.png"
import six from "../../public/static/img/buckstarterimgs/icons/6.png"
import seven from "../../public/static/img/buckstarterimgs/icons/7.png"
import eight from "../../public/static/img/buckstarterimgs/icons/8.png"
import nine from "../../public/static/img/buckstarterimgs/icons/9.png"
import ten from "../../public/static/img/buckstarterimgs/icons/10.png"

export default function Clients(props) {
  return (
    <>
    <Container>
        <h1 className="text-center">Our Clients</h1>
        <div className="mt-5"></div>
        <div className="d-flex flex-wrap">
        <Row className="justify-content-md-center">
          <Col xs={3} xl={2}>
            <Image src={one} fluid />
          </Col>
          <Col xs={3}xl={2}>
            <Image src={two} fluid />
          </Col>
          <Col xs={3} xl={2}>
            <Image src={four} fluid />
          </Col>
          <Col xs={3 } xl={3}>
            <Image src={three} fluid />
          </Col>
          <Col xs={3 } xl={2}>
            <Image src={five} fluid />
          </Col>
        <Col xs={4 } xl={3}>
            <Image src={six} fluid />
          </Col>
          <Col xs={4 } xl={2}>
            <Image src={ten} fluid />
          </Col>
          <Col xs={4 } xl={2}>
            <Image src={seven} fluid />
          </Col>
          <Col xs={4 } xl={2}>
            <Image src={eight} fluid />
          </Col>
          <Col xs={4 } xl={2}>
            <Image src={nine} fluid />
          </Col>
        </Row>
        </div>
        </Container>
        <div id="parallax-world-of-ugg">
            <div className="parallax-one">
            <Container>
                <h1 className="hiveOperate text-center">We operate as a hive</h1>
                <p className="hiveOperateSmall text-center">At buckstarter customized teams swarm to fill the need. We solve & dissolve. Low overhead cost structure means more value per scope.
            We operate more like a holywood movie studio than an ad agency.</p>'
            </Container>
            </div>
        </div>
       
        
      </>
  )
}
