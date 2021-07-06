/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  /*
    When width gets to small the Footer stacks from vertical to horizontal
  */
  React.useEffect(() => {
    const updateFooter = () => {
      if (document.documentElement.scrollWidth > 990 || document.body.scrollWidth > 900) {
        setCollapseOpen(false);
      } else if (document.documentElement.scrollWidth < 991 || document.body.scrollWidth < 991) {
        setCollapseOpen(true);
      }
    };
    window.addEventListener("scroll", updateFooter);
    return function cleanup() {
      window.removeEventListener("scroll", updateFooter);
    };
  });

  return (
    <>
      {collapseOpen ? (
        <footer className="footer text-center" data-background-color="black">
          <Container>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </Container>
          <Container>
            <div className="text-center" id="copyright" style={{ paddingTop: "15px" }}>
              © {new Date().getFullYear()} Built by{" "}
              <a href="https://www.linkedin.com/in/vargas-rick/" target="_blank" rel="noreferrer">
                Ricardo Vargas
              </a>
            </div>
          </Container>
        </footer>
      ) : (
        <footer className="footer" data-background-color="black">
          <Container>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/Products">Products</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="copyright" id="copyright">
              © {new Date().getFullYear()} Built by{" "}
              <a href="https://www.linkedin.com/in/vargas-rick/" target="_blank" rel="noreferrer">
                Ricardo Vargas
              </a>
            </div>
          </Container>
        </footer>
      )}
    </>
  );
}

export default Footer;
