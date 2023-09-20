import React, { useEffect } from 'react';
import { homeContent, PythonSection, JavaSection, HtmlSection } from './Contents/homeContent'; // Adjust the path to your TextContent.js file
import VerticalCarousel from './VerticalCarousel';
import '../Styles/home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
  const { header, python, java, html } = homeContent;
  const py = <PythonSection python={python} />
  const jav = <JavaSection java={java} />
  const htm = <HtmlSection html={html} />
  const sections = [py, jav, htm];

  useEffect(() => {
    document.title = homeContent.pageTitle;
  }, []);

  return (
    <div>
      <div className='bg-dark'>
        <Container className="px-5">
          <Row className="gx-5 align-items-center justify-content-center">
            <Col>
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">{header.title}</h1>
                <p className="lead fw-normal text-white-50 mb-4">{header.description}</p>
                <Row className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start ">
                  <Col>
                    <Link to='/About'>
                      <Button style={{width: '100%'}} variant="dark" className="btn-outline-light m-3" size='lg'>
                        <i className="bi bi-person-fill"></i>{' '}{header.aboutButton}
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                  <Link to='/Contact'>
                    <Button style={{width: '100%'}} variant="dark" className="btn-outline-light m-3" size='lg'>
                      <i className="bi bi-eye-fill"></i>{' '}{header.contactButton}
                    </Button>
                  </Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="col-xxl-4 d-xl-block">
              <Container className='img-container'>
                <img className="my-1 img-zoom" src="/images/me.png" alt="Logo" />
              </Container>            
            </Col>
          </Row>
        </Container>
      </div>
        <VerticalCarousel items={sections} />
    </div>
    
  );
};

export default Home;
