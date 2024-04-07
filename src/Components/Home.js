import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>{homeContent.pageTitle}</title>
        <meta name="description" content="Home - Botan Guzel" />
        <meta charset="utf-8" />
        <link rel="icon" href="/images/me.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        <meta
          name="description"
          content="Delve into the coding expertise and creative endeavors of Botan Guzel, 
          through his meticulously crafted portfolio website. Navigate through Botan Guzel's Portfolio to explore a showcase of programming projects, 
          technical prowess, and innovative solutions. From software development to algorithmic mastery, Botan's portfolio offers a glimpse into his dedication to excellence in the realm of programming. 
          Whether you're seeking insights, collaboration opportunities, or simply inspiration, Botan Guzel's portfolio is your destination for discovering the artistry and proficiency of a skilled programmer."
        />
        <meta
          name="keywords"
          content="Botan, Botan Guzel, Botan Guzel - CV, Botan Guzel Portfolio"
        />
        <meta property="og:title" content={homeContent.pageTitle} />
        <meta
          property="og:description"
          content="Delve into the coding expertise and creative endeavors of Botan Guzel, 
          through his meticulously crafted portfolio website. Navigate through Botan Guzel's Portfolio to explore a showcase of programming projects, 
          technical prowess, and innovative solutions. From software development to algorithmic mastery, Botan's portfolio offers a glimpse into his dedication to excellence in the realm of programming. 
          Whether you're seeking insights, collaboration opportunities, or simply inspiration, Botan Guzel's portfolio is your destination for discovering the artistry and proficiency of a skilled programmer."
        />
        <meta property="og:url" content="https://www.botanguzel.com/" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Helmet>
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
