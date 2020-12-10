import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "../components/cards";
import Header from "../components/header";



import { autechre } from "../../static/articles/autechre";
import { comparecontrast } from "../../static/articles/comparecontrast";
import { thesoloist } from "../../static/articles/thesoloist";


import "./style.css"; // Tell webpack that Button.js uses these styles
import { Container, Row, Image, Carousel, Col, Figure } from "react-bootstrap";



export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="">
          <br />
          <h3 className="text-center">Recent Works:</h3>
          <Col lg={6} xl={8} className="mx-auto">
            <br />
            <p className="existance text-center">
              I like to write about my passions. The act of researching something and presenting it is incredibly gratifying for me. Here are some of my works: 
            </p>
            <Row xl={10} >
              <Cards
                // tileImage={upcycle.thumbnail}
                tileTitle={autechre.title}
                tileDate={autechre.date}
                tileDescription ={autechre.description}
                tileLink = {autechre.markdown}
                fluid
              />
              <Cards
                // tileImage={upcycle.thumbnail}
                tileTitle={comparecontrast.title}
                tileDate={comparecontrast.date}
                tileDescription ={comparecontrast.description}
                tileLink = {comparecontrast.markdown}
                fluid
              />
<Cards
                // tileImage={upcycle.thumbnail}
                tileTitle={thesoloist.title}
                tileDate={thesoloist.date}
                tileDescription ={thesoloist.description}
                tileLink = {thesoloist.markdown}
                fluid
              />
            </Row>
            <Row xl={10} >
              
            </Row>
            <hr />
            <h3 className="text-center">Reflection Essay</h3>
            <p>I felt that in these two pieces, I took more risks by working in genres I have little writing experience with. This was especially true when writing about fashion, as I have very little experience reading and writing fashion reviews. There is an inherent difficulty reviewing a fashion show you did not attend. Watching a runway show, is much different than attending a runway show. There can be a sense of loss of intimacy by looking at photos or scraping through what little footage I could find of the show itself. The same went with working with film. Despite this, I felt as though I was able to accurately analyze both genres. In reading other analyses of both film and fashion, I feel as though I was also able to expand my own vocabulary about these genres. </p>
            <p>I hope that over the course of the assignment, the reader was able to see how much of a creative process this semester was. Whether it was the “Compare and Contrast” piece we did, or even pieces I didn’t exhibit like the biography, working on assignment this semester was both fun and stimulating.  Over the course of peer reviews and workshops, it was clear that other students felt this way too. </p>
            <p>I also hope that audiences appreciate the minimalistic user interface I set up, something I programmed from the ground up using JavaScript. I felt as though that, with most website builders, I wasn’t given the creative tools I wanted to truly build my own website to my own aeshetic. However, the skills I had gained this semester in my computer science courses enabled me to find out how to build my own blogging platform and customize it down to each element. Because I had spent so much time working on these assignments this year, I didn’t want to rely on Weebly or Wix to portray my work in a capacity I could look to in the future. As I progress further throughout my career, I plan on including more writing examples, and eventually, present them to employers on the website. </p>
            <p>Despite the virtual nature of this semester, I feel as though I have produced some of my best writing content yet. Under the supervision of Dr. Clark, I was able to explore my own voice and improve the overall integrity of my output. I feel confident that although this website will grow over the years, some of my most important writing will have been produced this semester.</p>
            </Col>
        </div>
        

      </Container>
    </>
  );
}
