import { Container, Row, Col, Card, Badge, Stack, Button, ButtonGroup } from 'react-bootstrap';

// TextContent.js
const homeContent = {
    pageTitle: 'Botan Guzel - Home',
    header: {
      title: 'Who Am I?',
      description: 'I am a hard-working college student, currently studying computer engineering at Luleå University of Technology.\n'+
      'I am engaged in further developing my knowledge and can effectively lead smaller projects as well as collaborte in teams.\n'+
      'I have proficiency in a variety of programming languages including Python, Java, C# and React.',
      aboutButton: 'About Me',
      contactButton: 'Contact Me',
    },
    python: {
      title: 'Python Projects',
      icon: 'bi bi-filetype-py',
      items: [
        {
          title: 'S&D&T',
          description: 'It is an application that searches images for a certain word and downloads a certain amount of results '+
          'before starting to train an image generation machine with these images',
        },
        {
          title: 'Hangman',
          description: 'A simple hangman game, that uses keyboard inputs, and can be personalized completely. In addition to this, '+
          'even the language and its level of difficulty can be changed as the user gives words for the new language.',
        },
      ],
    },
    java: {
      title: 'Java Projects',
      icon: 'bi-filetype-java',
      items: [
        {
          title: 'Customer Simulator',
          description: 'It is a CLI-application for simulating customers in a supermarket. However, the simulation and the '+
          'supermarket parts are written clearly to achieve to use simulator in another application if needed.',
        },
        {
          title: 'Calculator',
          description: 'A calculator application that demonstrates how to use GUI together with a state class that can prevent '+
          'changes on the GUI if necessary.',
        },
      ],
    },
    html: {
      title: 'Example Projects',
      icon: 'bi-filetype-html',
      items: [
        {
          title: 'BirCözum.com',
          description: 'A website built with HTML, JS and PHP and uses Python for automation of certain functions. Users can add'+
          '/remove/edit complaints or suggestions for a town. Every complaint and suggestion are shown clearly on a Google Map that'+
          ' is implemented on the different parts of the website.',
        },
        {
          title: 'botanguzel.com',
          description: 'Of course this website takes its place in here too. It has been built with React and HTML. This website'+
          ' only uses back-end when user views my CV.',
        },
      ],
    },
  };
  
  const PythonSection = ({ python }) => {
    return (
      <Container className='px-5 my-5'>
        <Row className="gx-5">
          <Col>
            <h2 className="fw-bolder mb-0"><i className={python.icon} /> {python.title}</h2>
          </Col>
          <Col className="col-lg-8">
            <Row className="gx-5">
              {python.items.map((item, index) => (
                <Col className="mb-5 h-100" key={index}>
                  <div className="bg-gradient bg-dark text-white rounded-5 mb-3 h3">
                    {item.title}
                  </div>
                  <p className="h5">{item.description}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };

  const JavaSection = ({ java }) => {
    return (
      <Container className='px-5 my-5'>
          <Row className="gx-5">
            <Col className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0"><i className={java.icon}/> {java.title} </h2>
            </Col>
            <Col>
              <Row className="gx-5">
                {java.items.map((item, index) => (
                  <Col key={index}>
                    <div className="bg-dark bg-gradient text-white rounded-5 mb-3 h3">
                      {item.title}
                    </div>
                    <p className="mb-0 h5">{item.description}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
    );
  };

  const HtmlSection = ({ html }) => {
    return (
      <Container className={`container px-5 my-5`}>
        <Row className="gx-5">
          <Col>
            <h2 className="fw-bolder mb-0"><i className={html.icon} /> {html.title}</h2>
          </Col>
          <Col className="col-lg-8">
            <Row className="gx-5">
              {html.items.map((item, index) => (
                <Col className="mb-5 h-100" key={index}>
                  <div className="bg-gradient bg-dark text-white rounded-5 mb-3 h3">
                    {item.title}
                  </div>
                  <p className="h5">{item.description}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
  export { homeContent, PythonSection, JavaSection, HtmlSection };
  