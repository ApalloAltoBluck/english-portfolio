import React from "react"

import { Card, Row, Col, Container, Modal, Carousel } from "react-bootstrap"

export default function Cards(props) {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  let videolinks = []

  props.videos.map(video =>
    videolinks.push("https://player.vimeo.com/video/" + video)
  )

  return (
    <>
      <Col xs={6} md={4}>
        <Card className="bg-dark text-white" onClick={handleShow}>
          <Card.Img src={props.tileImage} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{props.tileTitle}</Card.Title>
          </Card.ImgOverlay>
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
            {props.images.map(image => (
              <Carousel.Item>
                <img className="d-block w-100" src={image} />
                <Carousel.Caption>{/* <h3>{image}</h3> */}</Carousel.Caption>
              </Carousel.Item>
            ))}
            {videolinks.map(video => (
              <Carousel.Item>
                <iframe
                  className="d-block w-100"
                  src={video}
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
                <Carousel.Caption>{/* <h3>{image}</h3> */}</Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          <br></br>
          <h2>Client Spotlight: {props.tileTitle} </h2>
          <p>{props.tileDescription}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}
