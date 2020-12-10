import React from "react";

import { Container, Header} from "react-bootstrap";

export default function Home() {
    return (
      <>
        <Header />
        <Container>
              <p className="existance text-center">
                It seems like you are lost! No worries, just use the nav bear to get back home.
              </p>
        </Container>
      </>
    );
  }