import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Tech in Kenya</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">Coding in Kenya</h1>
          
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  as="svg"
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="#198754"/>
                  <text x="50%" y="50%" fill="white" textAnchor="middle" dominantBaseline="middle" fontSize="40">
                    Silicon Savannah
                  </text>
                </Card.Img>
                <Card.Body>
                  <Card.Title>Tech Hub of East Africa</Card.Title>
                  <Card.Text>
                    Kenya's Silicon Savannah is rapidly becoming Africa's leading tech hub, 
                    hosting numerous startups and tech companies in Nairobi's vibrant ecosystem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  as="svg"
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="#dc3545"/>
                  <text x="50%" y="50%" fill="white" textAnchor="middle" dominantBaseline="middle" fontSize="40">
                    M-PESA Innovation
                  </text>
                </Card.Img>
                <Card.Body>
                  <Card.Title>Mobile Innovation</Card.Title>
                  <Card.Text>
                    Kenya leads in mobile money innovation with M-PESA, showcasing how 
                    technology can revolutionize financial inclusion in Africa.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  as="svg"
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="#0d6efd"/>
                  <text x="50%" y="50%" fill="white" textAnchor="middle" dominantBaseline="middle" fontSize="40">
                    Tech Education
                  </text>
                </Card.Img>
                <Card.Body>
                  <Card.Title>Growing Tech Talent</Card.Title>
                  <Card.Text>
                    Kenya's tech education sector is booming with coding bootcamps, 
                    tech hubs, and innovation centers nurturing the next generation of developers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;