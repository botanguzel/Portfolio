import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import footerContent from './Contents/footerContent';
import { Link } from 'react-router-dom';
import '../Styles/foot.css';

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-white-50">
        <Container className="p-4">
        <hr></hr>
            <section className="mb-4">
                <Row>
                    <Col> <h4> {footerContent.title} </h4> </Col>
                    <Col>
                        <Button variant="outline-light" className="m-1" href={footerContent.linkedin} target='_blank' role="button">
                            <i className="bi bi-linkedin"></i>
                        </Button>
                        <Button variant="outline-light" className="m-1" href={footerContent.github} target='_blank' role="button">
                            <i className="bi bi-github"></i>
                        </Button>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col>
                        <h5> {footerContent.name} </h5>
                        <p style={{textAlign:'start'}}> {footerContent.description} </p>
                    </Col>
                    <Col>
                        <h5> LINKS </h5>
                        <ul className="list-unstyled mb-0">
                            <li> <Link to="/" className="text-white-50"> Home </Link> </li>
                            <li> <Link to="/About" className="text-white-50"> About </Link> </li>
                            <li> <Link to="/Projects" className="text-white-50"> Projects </Link> </li>
                            <li> <Link to="/Contact" className="text-white-50"> Contact </Link> </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5> {footerContent.contact} </h5>
                        <p className='text-start bi bi-envelope-at-fill'>  {footerContent.email} </p>
                        <p className='text-start bi bi-phone-fill'>  {footerContent.number} </p>
                        <p className='text-start bi bi-house-fill'> {footerContent.address} </p>
                    </Col>
                </Row>
            </section>
        </Container>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-white-50" href='/'> {footerContent.web} </a>
      </div>
    </footer>
  );
};

export default Footer;
