import React from "react";
import { Container, Row, Col } from "reactstrap";

/* Import core components */
import NavigationBar from "../components/NavigationBar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

/* Import images used */
import headerImage from "../assets/img/header_4.jpg";

function ContactPage() {
  /*
    Displays sidebar navigation when necesary 
  */
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="wrapper">
        <Header image={headerImage} title={"Contact Us"} />
        <div className="section-team text-center">
          <Container>
            <Row>
              <Col>
                <a href="tel:414-671-4751">
                  <i style={{ marginTop: "30px" }} className="now-ui-icons tech_mobile"></i>
                  <h2 className="title" style={{ paddingTop: "15px" }}>
                    Phone
                  </h2>
                  <p className="category text-info">414-671-4751</p>
                </a>
              </Col>
              <Col>
                <a href="mailto:sales@losaltosagavedistributor.com">
                  <i style={{ marginTop: "30px" }} className="now-ui-icons ui-1_email-85"></i>
                  <h2 className="title" style={{ paddingTop: "15px" }}>
                    Email
                  </h2>
                  <p className="category text-info">sales@losaltosagavedistributor.com</p>
                </a>
              </Col>
              <Col>
                <a href="https://goo.gl/maps/J6xZ145VmuHremk27" target="_blank" rel="noopener noreferrer">
                  <i style={{ marginTop: "30px" }} className="now-ui-icons location_pin"></i>
                  <h2 className="title" style={{ paddingTop: "15px" }}>
                    Address
                  </h2>
                  <p className="category text-info">3431 W Forest Home Ave, Milwaukee, WI 53215</p>
                </a>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <iframe
              title="Los Altos Agave Distributor, Inc."
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11672.812524517409!2d-87.9571044!3d42.9950571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb71004f54521f9b7!2sLos%20Altos%20Agave!5e0!3m2!1sen!2sus!4v1622063629853!5m2!1sen!2sus"
              width="100%"
              height="450"
              loading="lazy"
              className="border border-dark"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            ></iframe>
          </Container>
        </div>
        <div className="section-team text-center">
          <Container>
            <Row></Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
