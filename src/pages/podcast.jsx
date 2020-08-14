import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet"
import NavigationBar from "../components/NavigationBar"
import PodcastHeroUnit from "../components/PodcastHeroUnit"
import "../styles/style.css";

const PodcastLayout = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TGH | Podcast</title>
      </Helmet>

      <NavigationBar />
      <PodcastHeroUnit />

      <div
        style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "30px",
        }}
      >

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <p>
              All of our episodes are available on the web at{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://anchor.fm/thegoldenhurricast"
              >
                Anchor.fm
          </a>
        </p>
          </Container>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <p>
              You can also find our podcast on <b>10 different platforms</b>: Apple Podcasts, Spotify, Google Podcasts, Overcast, Castro, Stitcher, Breaker, Castbox, Pocket Casts, and RadioPublic. Just search for "The Golden Hurricast".
          </p>
          </Container>
        </div>

        <br />

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <h4>Latest Episode</h4>
            <hr style={{ width: "100%" }} />
          </Container>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <Row>
              <Col>
                <iframe 
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed"
                  title="latest episode"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <br /> <br /> <br />
        
        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <h4>Previous 4 Episodes</h4>
            <hr style={{ width: "100%" }} />
          </Container>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <Row md={12}>
              <Col sm={12} lg={6} style={{marginBottom: '20px'}}>
                <iframe
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-27-Conference-Champs--Postseason-Predictions-ebd5sj" 
                  title="2-27: Conference Champs and Postseason Predictions"
                  height="102px" 
                  width="300px" 
                  frameBorder="0" 
                  scrolling="no">
                </iframe>
              </Col>
              <Col sm={12} lg={6}>
                <iframe 
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-26-Have-Yourself-a-Week-Lawson-eb7dpe" 
                  title="2-26: Have Yourself a Week, Lawson"
                  height="102px" 
                  width="300px" 
                  frameBorder="0" 
                  scrolling="no">
                </iframe>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={12} lg={6} style={{marginBottom: '20px'}}>
                <iframe 
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-25-Legends-ft--Trevis-Gipson-eb1b4s" 
                  title="2-25: Legends"
                  height="102px" 
                  width="300px" 
                  frameBorder="0" 
                  scrolling="no">
                </iframe>
              </Col>
              <Col sm={12} lg={6}>
                <iframe 
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-24-Race-4-the-AAC-eatl9e" 
                  title="2-24: Race 4 the AAC"
                  height="102px" 
                  width="300px" 
                  frameBorder="0" 
                  scrolling="no">
                </iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
      </div>
    </div>
  );
};

export default PodcastLayout;
