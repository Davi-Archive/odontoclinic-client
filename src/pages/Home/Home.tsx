import {
  bannerHeader1,
  bannerHeader2,
  bannerHeader3,
} from "../../assets";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <Carousel variant="dark" fade>
        <Carousel.Item>
          <img
            className="header-banner d-block w-100"
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
    </>
  );
};

export default Home;