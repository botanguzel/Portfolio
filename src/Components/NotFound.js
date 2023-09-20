import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

const NotFound = () => {
  return (
    <div className='bg-dark'>
      <Container className='d-flex align-items-center justify-content-center vh-100'>
          <Row className='text-center'>
              <Col>
                  <img src='/images/404.png' alt='Page Not Found' className='img-fluid'/>
              </Col>
              <Col className='mt-4'>
                  <p className='fs-3 text-secondary'> <span className='text-danger'> Opps! </span> Seems like you came to wrong address.</p>
                  <p className='lead fs-4 text-white'>
                      The page you’re looking for doesn’t exist.
                  </p>
                  <Button href='/' variant='dark' className='btn-outline-primary m-3' size='lg' >Go Home </Button>
              </Col>
          </Row>
      </Container> 
      </div>
  );
};

export default NotFound;
