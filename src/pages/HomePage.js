import React from "react";
import { Container, Row, Col } from "reactstrap";

/* Import images used */
import homeImage from "../assets/img/homeImage_1.jpg";
import homeImage2 from "../assets/img/homeImage_2.jpg";
import headerImage from "../assets/img/header_1.jpg";

/* Import core components */
import NavigationBar from "../components/NavigationBar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function HomePage() {
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

  /*
  ROW =  "flex-column flex-lg-row? Allows to turn row into column fast so view is not distorted
  */
  return (
    <>
      <NavigationBar />
      <div className="wrapper">
        <Header image={headerImage} title={"Los Altos Agave Distributor, Inc."} />
        <div className="section section-about-us">
          <Container>
            <Row className="shadow-sm bg-white rounded">
              <Col className="ml-auto mr-auto text-center" md="10">
                <h2 className="title" style={{ marginBottom: "20px" }}>
                  Milwaukee's premier Tequila Distributor
                </h2>
                <p className="description" style={{ paddingBottom: " 10px" }}>
                  We are a spirit wholesale distributor that has been servicing the Milwaukee county area for
                  the past 20 years. Our specialty and passion is in providing the most premier Tequila.
                </p>
              </Col>
            </Row>
            <div className="section-story-overview">
              <Row className="shadow-sm bg-white rounded flex-column flex-lg-row">
                <Col md="7">
                  <img
                    src={homeImage}
                    alt="Agave"
                    style={{
                      boxShadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.3)",
                      borderRadius: "0.1875rem",
                      maxHeight: "450px",
                      width: "100%",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  />
                </Col>
                <Col md="5">
                  <h2 className="text-center" style={{ marginBottom: "20px", marginTop: "20px" }}>
                    History of Tequila
                  </h2>
                  <p style={{ marginBottom: "20px" }}>
                    Tequila was first produced by the Aztecs in the 16th century as a fermented beverage known
                    as Pulque or Octli. When the Spanish conquistadores made their way to the Americas, they
                    began distilling and mass producing tequila in the modern-day territory of Jalisco,
                    Mexico.
                  </p>
                  <p style={{ paddingBottom: " 10px" }}>
                    Today, Los Altos, Jalisco is one of the principal regions producing tequila. The unique
                    region contains red volcanic soil which produces a large blue agave plant with a sweet
                    aroma and flavor. Perfect for making tequila.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="section-story-overview" style={{ padding: "0px" }}>
              <Row className="shadow-sm bg-white rounded flex-column-reverse flex-lg-row">
                <Col md="5">
                  <h2 className="text-center" style={{ marginBottom: "20px", marginTop: "20px" }}>
                    Tradition of Tequila
                  </h2>
                  <p style={{ marginBottom: "20px" }}>
                    The tradition of tequila is rooted in the manual labor needed to harvest the agave. The
                    plant is tended and harvested by dedicated jimadores, people committed to the harvest of
                    agave, while perfecting a skill that has been passed down generations. Believing that
                    maintaining the tradition of harvest ensures a product virtuous enough to please the Gods.
                  </p>
                  <p style={{ paddingBottom: " 10px" }}>
                    Today, tequila largely encompasses the heart and liveliness of the Mexican culture.
                    Tequila can be found at any gathering or paired with your favorite tacos. It is the to go
                    drink while listening to Vicente Fernandez or dancing banda. It truly represents Mexican
                    culture.
                  </p>
                </Col>
                <Col md="7">
                  <img
                    src={homeImage2}
                    alt="Agave"
                    style={{
                      boxShadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.3)",
                      borderRadius: "0.1875rem",
                      maxHeight: "450px",
                      width: "100%",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  />
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

export default HomePage;
