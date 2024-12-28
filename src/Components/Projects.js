import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Container, Card, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import projectContent from './Contents/projectContent';
import ImageComponent from './ImageComponent';

const Projects = () => {
  const [activeContainer, setActiveContainer] = useState(1);
  const handleButton = (contianerNummer) => {
    setActiveContainer(contianerNummer);
  };


  useEffect(() => {
    document.title = projectContent.title;
  });

  return (
    <>
      <Helmet>
        <title>{projectContent.pageTitle}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        {/* Meta Description */}
        <meta
          name="description"
          content="Explore Botan Guzel's diverse portfolio of projects that showcase his programming skills in Python, Java, HTML, and more. Discover applications like 'Search Download & Train', 'Simulator', and other unique projects demonstrating his expertise in software development and problem-solving. Visit Botan's GitHub for source code and additional details."
        />
        {/* Meta Charset */}
        <meta charset="utf-8" />
        {/* Favicon */}
        <link rel="icon" href="/images/me.jpg" />
        {/* Meta Viewport for Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theme Color for Browser UI */}
        <meta name="theme-color" content="#000000" />

        {/* External CSS (Bootstrap Icons) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="Botan Guzel, Projects, Portfolio, Software Development, Python, Java, HTML, GitHub, Search Download, Simulator"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={projectContent.pageTitle} />
        <meta
          property="og:description"
          content="Explore Botan Guzel's portfolio of projects showcasing his skills in Python, Java, HTML, and more. From 'Search Download & Train' to 'Simulator', each project demonstrates his programming expertise. Visit Botan's GitHub for code and details."
        />
        <meta property="og:url" content="https://www.botanguzel.com/projects" />
        <meta property="og:image" content="https://www.botanguzel.com/images/me.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={projectContent.pageTitle} />
        <meta
          name="twitter:description"
          content="Explore Botan Guzel's programming projects, including 'Search Download & Train', 'Simulator', and more. Discover the skills behind his work in Python, Java, HTML, and other technologies."
        />
        <meta name="twitter:image" content="https://www.botanguzel.com/images/me.jpg" />

        {/* Web App Manifest */}
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      </Helmet>
      <div className='bg-dark'>
        <section className='py-5'>
          <Container fluid='lg'>
            <div className='d-flex flex-wrap flex-row justify-content-start'>
              <div className="my-5 text-center text-xl-start">
                <p className="fw-bolder lead text-white mb-4">
                  {projectContent.description}
                  <a href={`${projectContent.link}`} className="text-white-50" target='_blank' rel='noreferrer'>GitHub page. </a>
                </p>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-row justify-content-start'>
            <ToggleButtonGroup type='radio' name='projects' value={activeContainer} onChange={handleButton}>
              <ToggleButton size='lg' className='btn-outline-dark btn-secondary' id='python' value={1}> {projectContent.python.name} </ToggleButton>
              <ToggleButton size='lg' className='btn-outline-dark btn-secondary' id='java' value={2}> {projectContent.java.name} </ToggleButton>
              <ToggleButton size='lg' className='btn-outline-dark btn-secondary' id='html' value={3}> {projectContent.html.name} </ToggleButton>
            </ToggleButtonGroup>
          </div>
          </Container>
        </section>
        
        <section>
          <Container className='px-5' style={{ display: activeContainer === 1 ? 'block' : 'none' }}>
            {projectContent.python.items.map((project, index) => (
              <Row>
                <Col>
                <Card className='bg-dark py-2 text-white-50' style={{ textAlign: 'start'}}>
                  <Card.Header> {project.projectName} </Card.Header>
                    <Card.Body>
                      <h5>{project.projectDescription}</h5>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="col-xxl-4 d-xl-block ">
                  <Container>
                    <ImageComponent imageURL={project.projectImg} imageAlt={project.imgAlt} />
                  </Container>
                </Col>
                <hr></hr>
              </Row>
            ))}
          </Container>
        </section>

        <section>
          <Container className='px-5' style={{ display: activeContainer === 2 ? 'block' : 'none' }}>
            {projectContent.java.items.map((project, index) => (
                <Row>
                  <Col>
                  <Card className='bg-dark py-2 text-white-50' style={{ textAlign: 'start'}}>
                    <Card.Header> {project.projectName} </Card.Header>
                      <Card.Body>
                        <h5>{project.projectDescription}</h5>
                      </Card.Body>
                  </Card>
                  </Col>
                  <Col className="col-xxl-4 d-xl-block ">
                    <Container>
                      <ImageComponent imageURL={project.projectImg} imageAlt={project.imgAlt} />
                    </Container>            
                  </Col>
                  <hr></hr>
                </Row>
              ))}
          </Container>
        </section>

        <section>
          <Container className='px-5' style={{ display: activeContainer === 3 ? 'block' : 'none' }}>
            {projectContent.html.items.map((project, index) => (
              <Row>
                <Col>
                  <Card className='bg-dark py-2 text-white-50' style={{ textAlign: 'start'}}>
                    <Card.Header> {project.projectName} </Card.Header>
                    <Card.Body>
                      <h5>{project.projectDescription}</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-xxl-4 d-xl-block ">
                  <Container>
                  <h5>
                    <a href={`https://${project.link}`} className="text-white-50" target='_blank' rel='noreferrer'> {project.link} </a>
                  </h5>
                </Container>            
                </Col>
                <hr></hr>
              </Row>
            ))}
          </Container>
        </section>
              
              
      </div>
    </>
  );
};

export default Projects;
