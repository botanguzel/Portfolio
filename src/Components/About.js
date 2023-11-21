import React, { useEffect, useState } from 'react';
import aboutContent from './Contents/aboutContent';
import StackedProgressbar from './StackedProgressbar';
import { Container, Row, Col, Accordion, Card, Badge, Stack, Button, useAccordionButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <h4
      style={{display:'-webkit-flex', cursor:'pointer'}}
      onClick={decoratedOnClick}
    >
      {children}
    </h4>
  );
}

const About = () => {
  const [isLoading, setLoading] = useState(false);
  const [activeAccordionKey, setActiveAccordionKey] = useState(null);

  useEffect(() => {
    document.title = aboutContent.pageTitle;
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleAccordionChange = (eventKey) => {
    setActiveAccordionKey(eventKey === activeAccordionKey ? null : eventKey);
  };

  const isAccordionActive = (eventKey) => {
    return eventKey === activeAccordionKey ? 'bg-white' : 'bg-secondary';
  };

  const handleClick = () => {
    setLoading(true);
    const cv = '/cv/Botan Guzel - CV.pdf';
    window.open(cv, '_blank');
  };

  return (
    <div>
      <div className="bg-dark">
        <Container className="px-5">
          <Row className="gx-5 align-items-center justify-content-center">
            <Col className="d-xl-block">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">{aboutContent.header.title}</h1>
                <p className="lead fw-normal text-white-50 mb-4">{aboutContent.header.description}</p>
              </div>
            </Col>
            <Col className="d-xl-block">
              <Button variant="dark" className="btn-outline-warning m-3" size='lg'
                  disabled={isLoading} onClick={!isLoading ? handleClick : null} >
                  <i className="bi bi-file-earmark-pdf-fill"></i>{' '}
                  {isLoading ? aboutContent.header.cv.loading : aboutContent.header.cv.main}
              </Button>
              <Link to='/Projects'>
                <Button variant="dark" className="btn-outline-light m-3" size='lg' role="button">
                    <i className="bi bi-eye-fill"></i>{' '}
                    {aboutContent.header.projects}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bg-dark py-4' >
        <Container>
          <Row> {/** Experiences */}
            <Accordion activeKey={activeAccordionKey} onSelect={handleAccordionChange}>
              <Card className={isAccordionActive('0')}>
                <Card.Header>
                  <CustomToggle eventKey="0"> <i className={aboutContent.Experience.icon} /> {aboutContent.Experience.title}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {aboutContent.Experience.items.map((experience, index) => (
                      <Accordion key={index} style={{textAlign:'justify'}} >
                        <Card>
                          <Card.Header>
                            <CustomToggle eventKey={index + 1}>{experience.title}</CustomToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={index + 1}>
                            <Card.Body>
                              <h5>{experience.period}</h5>
                              <p>{experience.description}</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
          <hr></hr>
          <Row> {/** Education */}
            <Accordion activeKey={activeAccordionKey} onSelect={handleAccordionChange}>
              <Card className={isAccordionActive('1')}>
                <Card.Header>
                  <CustomToggle eventKey="1"> <i className={aboutContent.Education.icon}/> {aboutContent.Education.title} </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{textAlign:'justify', }} >{aboutContent.Education.description}
                  <hr></hr>
                  {aboutContent.Education.items.map((education, index) => (
                    <div style={{display:'flex'}}>
                    <h4><Badge bg={index === 0 ? 'warning' : 'success'}>{education.schoolName}</Badge></h4>
                    <h5 style={{paddingLeft:'10px'}}> {education.department} </h5>
                    <p style={{paddingLeft:'10px'}}> {education.period} </p>
                    </div>
                    ))}
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
          <hr></hr>
          <Row> {/** Courses */}
           <Accordion activeKey={activeAccordionKey} onSelect={handleAccordionChange}>
              <Card className={isAccordionActive('2')}>
                <Card.Header>
                  <CustomToggle eventKey="2"> <i className={aboutContent.Courses.icon}/> {aboutContent.Courses.title} </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body style={{textAlign:'justify', }} >
                  {aboutContent.Courses.items.map((course, index) => (
                      <Accordion key={index} style={{textAlign:'justify'}} >
                        <Card>
                          <Card.Header>
                            <CustomToggle eventKey={index + 1}>{course.name}</CustomToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={index + 1}>
                            <Card.Body>
                              <h4>{course.courseName}</h4>
                              <h5>{course.description}</h5>
                              <p>{course.period}</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    ))}
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
          <hr></hr>
          <Row> {/** Skills */}
            <Accordion activeKey={activeAccordionKey} onSelect={handleAccordionChange}>
              <Card className={isAccordionActive('3')}>
                <Card.Header>
                  <CustomToggle eventKey="3"> <i className={aboutContent.End.icon}/> {aboutContent.End.title} </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>{aboutContent.End.description}
                    <hr></hr>
                    <Container>
                      <Row>
                        <Col>
                          <Stack gap={3} style={{alignContent:'justify'}}>
                            <StackedProgressbar label="Python" valOne='33.6' valTwo='33.6' valThree='26'/>
                            <StackedProgressbar label="Java" valOne='33.6' valTwo='33.6' valThree='15'/>
                            <StackedProgressbar label="MySQL" valOne='33.6' valTwo='33.6' valThree='14'/>
                            <StackedProgressbar label="C#" valOne='33.6' valTwo='25' valThree='20'/>
                          </Stack>
                        </Col>
                        <Col>
                          <Stack gap={3} style={{alignContent:'justify'}}>
                            <StackedProgressbar label="HTML" valOne='33.6' valTwo='33.6' valThree='33.6'/>
                            <StackedProgressbar label="JavaScript" valOne='33.6' valTwo='33.6' valThree='33.6'/>
                            <StackedProgressbar label="React" valOne='33.6' valTwo='25' valThree='15'/>
                          </Stack>
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
