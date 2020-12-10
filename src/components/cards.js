import React from "react"

import { Card, Row, Col, Container, Modal, Carousel } from "react-bootstrap"

export default function Cards(props) {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  let videolinks = []

  // props.videos.map(video =>
  //   videolinks.push("https://player.vimeo.com/video/" + video)
  // )

  //            {props.images.map(image => (
  //  <Carousel.Item>
  //  <img className="d-block w-100" src={image} />
  //  <Carousel.Caption>{/* <h3>{image}</h3> */}</Carousel.Caption>
  //</Carousel.Item>
// ))}

  return (
    <>
      <Col className="">
        <Card >
          <Card.Body>
            <Card.Title>{props.tileTitle}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.tileDate}</Card.Subtitle>
            <Card.Text>
              {props.tileDescription}
            </Card.Text>
            <Card.Link href={"/blog/" + props.tileLink}>Read Here</Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Modal
        size="xl"
        dialogClassName="custom-dialog"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <Carousel>

          </Carousel>
          <br></br>
          {/* <h2>Client Spotlight: {props.tileTitle} </h2>
          <p>{props.tileDescription}</p> */}
        </Modal.Body>
      </Modal>
    </>
  )
}
