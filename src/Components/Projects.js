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
    <div>
      <Helmet>
        <title>{projectContent.pageTitle}</title>
        <meta name="description" content="Projects - Botan Guzel" />
        <meta charset="utf-8" />
        <link rel="icon" href="/images/me.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        <meta
          name="description"
          content="Explore Botan Guzel's diverse portfolio of projects showcasing his programming skills and creativity. 
          From Python to Java to HTML projects, dive into a variety of applications and simulations demonstrating Botan's expertise. 
          Discover projects like 'Search Download & Train', 'Simulator', and more, each offering unique functionalities and insights into Botan's coding prowess. 
          Visit Botan's GitHub page for further details and to explore the source code."
        />
        <meta
          name="keywords"
          content="Botan, Botan Guzel, Botan Guzel - CV, Botan Guzel Portfolio"
        />
        <meta property="og:title" content={projectContent.pageTitle} />
        <meta
          property="og:description"
          content="Explore Botan Guzel's diverse portfolio of projects showcasing his programming skills and creativity. 
          From Python to Java to HTML projects, dive into a variety of applications and simulations demonstrating Botan's expertise. 
          Discover projects like 'Search Download & Train', 'Simulator', and more, each offering unique functionalities and insights into Botan's coding prowess. 
          Visit Botan's GitHub page for further details and to explore the source code."
        />
        <meta property="og:url" content="https://www.botanguzel.com/Projects" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Helmet>
      <div className='bg-dark'>
        <Container className='gx-5'>
          <Container className='gx5'>
            <div className='d-flex flex-wrap flex-row justify-content-start'>
              <div class="my-5 text-center text-xl-start">
                <p class="fw-bolder lead text-white mb-4">
                  {projectContent.description}
                  <a href={`${projectContent.link}`} className="text-white-50" target='_blank' rel='noreferrer'>GitHub page. </a>
                </p>
              </div>
            </div>
          </Container>
          <div className='d-flex flex-wrap flex-row justify-content-start'>
            <ToggleButtonGroup type='radio' name='projects' value={activeContainer} onChange={handleButton}>
              <ToggleButton size='lg' className='btn-outline-dark btn-secondary' id='python' value={1}> {projectContent.python.name} </ToggleButton>
              <ToggleButton size='lg' className='btn-outline-dark btn-secondary' id='java' value={2}> {projectContent.java.name} </ToggleButton>
              <ToggleButton size='lg' className='btn-outline-dark btn-secondary' id='html' value={3}> {projectContent.html.name} </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <hr></hr>
              <Container className='gx-5' style={{ display: activeContainer === 1 ? 'block' : 'none' }}>
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
              <Container className='gx-5' style={{ display: activeContainer === 2 ? 'block' : 'none' }}>
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
              <Container className='gx-5' style={{ display: activeContainer === 3 ? 'block' : 'none' }}>
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
        </Container>
      </div>
    </div>
  );
};

export default Projects;
