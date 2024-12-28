import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { homeContent, PythonSection, JavaSection, HtmlSection } from './Contents/homeContent';
import VerticalCarousel from './VerticalCarousel';
import '../Styles/home.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import StackedProgressbar from './StackedProgressbar';


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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        {/* Meta Description */}
        <meta
          name="description"
          content="Explore the coding expertise and creative projects of Botan Guzel, a skilled computer engineer. Visit Botan's portfolio to see a showcase of his technical abilities, programming projects, and problem-solving skills in languages like Python, Java, C#, and React."
        />
        {/* Meta Charset */}
        <meta charset="utf-8" />
        {/* Favicon */}
        <link rel="icon" href="/images/me.png" />
        {/* Meta Viewport for Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theme Color for Browser UI */}
        <meta name="theme-color" content="#000000" />
        {/* External CSS (Bootstrap Icons) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="Botan Guzel, Portfolio, Programming, Developer, Software Engineer, Python, Java, React, C#, Projects, Algorithms"
        />
        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={homeContent.pageTitle} />
        <meta
          property="og:description"
          content="Explore the coding expertise and creative projects of Botan Guzel. Visit Botan's portfolio to see his programming skills and projects in languages like Python, Java, React, and more."
        />
        <meta property="og:url" content="https://www.botanguzel.com/" />
        <meta property="og:image" content="https://www.botanguzel.com/images/me.png" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeContent.pageTitle} />
        <meta
          name="twitter:description"
          content="Explore Botan Guzel's portfolio to discover his expertise in programming and software development. Visit to view projects in Python, Java, React, and more."
        />
        <meta name="twitter:image" content="https://www.botanguzel.com/images/me.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Botan Guzel",
              "jobTitle": "Computer Engineering Student",
              "url": "https://www.botanguzel.com/about",
              "image": "https://www.botanguzel.com/images/me.jpg",
              "description": "A computer engineering student at Luleå University of Technology.",
              "sameAs": [
                "https://www.linkedin.com/in/botanguzel",
                "https://github.com/botanguzel"
              ]
            }
          `}
        </script>
        {/* Web App Manifest */}
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Helmet>
      <div className='bg-dark'>
        <Container className="px-5">
          <Row className="gx-5 align-items-center justify-content-center">
            <Col className='col-12 col-md-6'>
              <div className="my-5 text-start text-xl-start">
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
            <Col className="col-12 col-md-6 d-xl-block">
              <Container className='img-container'>
                <img className="my-1 img-zoom" src="/images/me.png" alt="Logo" />
              </Container>            
            </Col>
          </Row>
        </Container>
      </div>
        {/* <VerticalCarousel items={sections} /> */}
        <div className="bg-dark py-5">
          <Container className="px-4">
            <Row className="g-5">
              <Col lg={6} md={12}>
                <Stack gap={4}>
                  <StackedProgressbar label="Python" valOne="33.6" valTwo="33.6" valThree="26" />
                  <StackedProgressbar label="Java" valOne="33.6" valTwo="33.6" valThree="15" />
                  <StackedProgressbar label="MySQL" valOne="33.6" valTwo="33.6" valThree="14" />
                  <StackedProgressbar label="C#" valOne="33.6" valTwo="25" valThree="20" />
                </Stack>
              </Col>
              <Col lg={6} md={12}>
                <Stack gap={4}>
                  <StackedProgressbar label="HTML" valOne="33.6" valTwo="33.6" valThree="33.6" />
                  <StackedProgressbar label="JavaScript" valOne="33.6" valTwo="33.6" valThree="33.6" />
                  <StackedProgressbar label="React" valOne="33.6" valTwo="25" valThree="15" />
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>

        
    </div>
    
  );
};

export default Home;
