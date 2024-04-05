import React, { useEffect, useState } from 'react';
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

  );
};

export default Projects;
