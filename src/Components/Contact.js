import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import contactContent from './Contents/contactContent';
import '../Styles/contact.css';

const Contact = () => {
  useEffect(() => {
    document.title = contactContent.pageTitle;
  }, []);
  
  const { header, contact} = contactContent;

  return (
    <div className='text-start bg-dark text-white-50'>
      <Container className="px-5">
        <Row className="mx-5 d-flex align-items-center justify-content-center">
          <div className="my-5">
            <h4 className=" fw-bold text-white-50 mb-2">{header.title}</h4>
          </div>
        </Row>

        <Row className="mx-5">
            <Container className='justify-content-center'>
              <div className='my-5' style={{marginLeft: '20vw'}}>
                <h5> {contact.contact} </h5>
                <ul className="list-unstyled">
                  <li style={{marginBottom: '3vh'}}> <a href={`mailto:${contact.email}`} className="text-white-50 bi bi-envelope-at-fill cList"> {contact.email} </a> </li>
                  <li style={{marginBottom: '3vh'}}> <a href={`tel:${contact.number}`} className="text-white-50 bi bi-phone-fill cList"> {contact.number} </a> </li>
                  <li style={{marginBottom: '3vh'}}> <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                          className='text-white-50 bi bi-house-fill cList' target="_blank" rel='noreferrer'>
                            {contact.address}
                        </a>
                  </li>
                  <li style={{marginBottom: '3vh'}}> <a href={`${contact.linkedin}`} className="text-white-50 bi bi-linkedin cList"
                    target='_blank' rel='noreferrer'> {contact.linkedin} </a> </li>
                  <li style={{marginBottom: '3vh'}}> <a href={`${contact.github}`} className="text-white-50 bi bi-github cList"
                    target='_blank' rel='noreferrer'> {contact.github} </a> </li>
                </ul>
              </div>
            </Container>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
