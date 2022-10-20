import { Image, Card } from "react-bootstrap";
import { foto1 } from "../assets";

const Videos = () => {
  return (
    <>
      
      <div className="wrapper-about-sec">
        <div className="card-mid" style={{ gridColumn: 2 }}>
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
        <div style={{ gridColumn: 1 }}>
          <Image src={foto1} />
        </div>
      </div>

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
          <Image src={foto1} />
        </div>
      </div>

      <div className="wrapper-about-sec">
        <div className="card-mid" style={{ gridColumn: 2 }}>
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
        <div style={{ gridColumn: 1 }}>
          <Image src={foto1} />
        </div>
      </div>
    </>
  );
};

export default Videos;
