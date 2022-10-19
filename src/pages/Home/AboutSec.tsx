import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { logo } from "../../assets";
import { bannerHeader1 } from "../../assets";

const AboutSec = () => {
  return (
    <>
      <div className="wrapper-about-sec">
        <div className="card-mid" style={{ gridColumn: 1 }}>
          <Card border="light" style={{ width: "48rem", textAlign: "center" }}>
            <Card.Header>
              <Card.Title>DRA KAMILA GODOY</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                A Dra Kamila Godoy possui uma longa caminhada de dedicação e
                paixão pela Odontologia. Formada pela Faculdade de Odontologia
                da Universidade de São Paulo, participa anualmente de congressos
                nacionais e internacionais, além de ser pesquisadora no
                Departamento de Ortodontia da Faculdade de Odontologia da
                Universidade de São Paulo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ gridColumn: 2 }}>
          <Image src={logo} />
        </div>
      </div>
      <Image src={bannerHeader1} style={{ width: "100%", height: "200px" }} />
    </>
  );
};

export default AboutSec;
