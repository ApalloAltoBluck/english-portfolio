import React from "react"
import { Container, Image, Col, Form, Button} from "react-bootstrap"

import scott from "../../static/cards/buckstarterimgs/dadphoto.jpg"


export default function Ending(props) {
  return (
    <>
      <div id="parallax-world-of-ugg">
        <div className="parallax-one">
          <Container>
            <h1 className="hiveOperate text-center">Meet Scott</h1>
            <br />
            <Image
              className="d-block w-25 mx-auto"
              src={scott}
              roundedCircle
            />
            <br />
            <p className="hiveOperateSmall text-center">
              Founder of Buckstarter LLC
            </p>
            <div className="d-block w-25 mx-auto">
              <Image
                className="d-block w-25"
                src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png"
                fluid
              />
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <br />
        <h1 className="text-center">GET IN CONTACT</h1>
        <Col lg={10} className="mx-auto">
          <br />
          <p className="text-center">
            Thanks for visiting. We'd love to hear from you. Better yet, we'd
            love to work with you. Use the form below and we will quickly get
            back to you. Let's get started!
          </p>

            <Col >
          <Form method="POST" action="https://formspree.io/scott@buckstarter.com">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your Company</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
         
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <input type="submit" value="Send" />
          </Form>          
          </Col>
            <br />
            <br />
            <br />
        </Col>
      </Container>
    </>
  )
}
