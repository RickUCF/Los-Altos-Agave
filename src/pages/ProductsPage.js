import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Card,
  CardColumns,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

/* Import images used */
import headerImage from "../assets/img/header_3.jpg";

/* Import core components */
import NavigationBar from "../components/NavigationBar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import products from "../assets/products/products.json";

function ProductsPage() {
  /*
  This handles filtering through checkboxes
  */
  const [checkedValues, setCheckedValues] = useState([]);
  const handleChecked = (e) => {
    if (e.target.checked) {
      let newCheckedValues = products.filter((tequila) => tequila.age === e.target.id);
      newCheckedValues = newCheckedValues.concat(checkedValues);
      setCheckedValues(newCheckedValues);
    } else {
      let newCheckedValues = checkedValues.filter((tequila) => tequila.age !== e.target.id);
      setCheckedValues(newCheckedValues);
    }
  };

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
        <Header image={headerImage} title={"Products"} />

        <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
          <div>
            <Row>
              <Col md="2">
                <div>
                  <Form>
                    <h4 className="title text-center" style={{ marginTop: "0px" }}>
                      Filter
                    </h4>
                    <FormGroup>
                      <Row>
                        <Col>
                          <CustomInput type="checkbox" id="Blanco" label="Blanco" onClick={handleChecked} />
                          <CustomInput
                            type="checkbox"
                            id="Reposado"
                            label="Reposado"
                            onClick={handleChecked}
                          />
                          <CustomInput type="checkbox" id="Anejo" label="Anejo" onClick={handleChecked} />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </div>
              </Col>
              <Col md="10">
                <CardColumns>
                  {checkedValues.map((data) => {
                    return (
                      <Card key={data.id} style={{ width: "150px", height: "380px", margin: "12px" }}>
                        <img
                          width="100%"
                          src={require("../assets/products/img/" + data.src).default}
                          alt={data.name}
                        />
                        <CardBody>
                          <CardTitle tag="h6">{data.name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {data.type}
                          </CardSubtitle>
                        </CardBody>
                      </Card>
                    );
                  })}
                </CardColumns>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default ProductsPage;
