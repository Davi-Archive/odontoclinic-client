import {
  bannerHeader1,
  bannerHeader2,
  bannerHeader3,
  logo,
} from "../../assets";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
//components
import Video from "./Video";
import AboutSec from "./AboutSec";
import Instagram from "./Instagram";

const Home = () => {
  return (
    <>
      <Carousel variant="dark" fade>
        <Carousel.Item>
          <img
            className="header-banner w-100"
            src={bannerHeader1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="header-banner d-block w-100"
            src={bannerHeader2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="header-banner d-block w-100"
            src={bannerHeader3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="card-mid">
        <Card border="light" style={{ width: "48rem", textAlign: "center" }}>
          <Card.Header>
            <Card.Title>DRA KAMILA GODOY</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              A Dra Kamila Godoy possui uma longa caminhada de dedicação e
              paixão pela Odontologia. Formada pela Faculdade de Odontologia da
              Universidade de São Paulo, participa anualmente de congressos
              nacionais e internacionais, além de ser pesquisadora no
              Departamento de Ortodontia da Faculdade de Odontologia da
              Universidade de São Paulo.
            </Card.Text>
            <Image src={logo} />
          </Card.Body>
        </Card>
      </div>
      <Video />
      {/* <AboutSec />  PROBLEM ON MOBILE */}
      <Instagram />
    </>
  );
};

export default Home;
