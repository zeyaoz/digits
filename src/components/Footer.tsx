import { Col, Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Col className="text-center">
        Department of Information and Computer Sciences
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        <br />
        <a href="http://ics-software-engineering.github.io/nextjs-application-template">Template Home Page</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
