/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from "react-bootstrap";
/* import { MailchimpForm } from "./MailchimpForm"; */
/* import logo from "../assets/img/logo.svg"; */
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
      
        <Row className="align-items-center container2">
          {/* <MailchimpForm /> */}
          
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end container2">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamed-rajab-301581272/"><img src={navIcon1} alt="Icon" /></a>
              <a href="tel:+31685085291"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/white-knight666"><img src={navIcon3} alt="Icon" /></a>
            </div>
            
          </Col>
        </Row>
      
      </Container>
    </footer>
  )
}
