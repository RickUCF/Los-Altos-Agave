import React from "react";
import { Container, Row, Col } from "reactstrap";

/* Import images used */
import aboutImage from "../assets/img/aboutImage_1.jpg";
import headerImage from "../assets/img/header_2.jpg";

/* Import core components */
import NavigationBar from "../components/NavigationBar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function AboutPage() {
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
        <Header image={headerImage} title={"About Us"} />
        <div className="section section-about-us">
          <Container>
            <div>
              <Row className="shadow-sm bg-white rounded">
                <Col className="ml-auto mr-auto text-center" md="10">
                  <h2 className="title" style={{ marginBottom: "20px" }}>
                    Who are we?
                  </h2>
                  <p className="description" style={{ marginBottom: "0px", paddingBottom: "10px" }}>
                    We are a family-owned business which delivers an authentic variety of tequila and other
                    imported spirits in the state of Wisconsin. Our specialty is in providing the best tequila
                    products. We ensure this through frequent visits to Jalisco, Mexico, the motherland of
                    tequila, which provides us with knowledge of traditional and upcoming tequila.
                  </p>
                </Col>
              </Row>
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Row className="shadow-sm bg-white rounded flex-column flex-lg-row">
                <Col md="6">
                  <img
                    src={aboutImage}
                    alt="Agave"
                    style={{
                      boxShadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.3)",
                      borderRadius: "0.1875rem",
                      maxHeight: "500px",
                      width: "100%",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  />
                </Col>
                <Col md="6">
                  <div>
                    <h2 className="text-center" style={{ marginBottom: "20px", paddingTop: "10px" }}>
                      Dedication to Quality
                    </h2>
                    <p className="description" style={{ marginBottom: "20px" }}>
                      Prior to importing tequila from Jalisco, Mexico we conduct extensive taste testing to
                      ensure we offer the best tasting tequila. Through frequent visits to distiliries in
                      Jalisco, Mexico and periodic testing of our products we are able to ensure that we
                      deliver the upmost highest quality products.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-center" style={{ marginBottom: "20px" }}>
                      Our Commitment
                    </h2>
                    <p className="description" style={{ paddingBottom: "10px" }}>
                      We commit to holding a standard of timely deliveries and always attend to customers with
                      friendly professional service. We are commited to providing our customer the highest
                      quality product and back it up by allowing our customers to taste test our products
                      before purchasing.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
