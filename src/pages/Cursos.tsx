import { Image, Card, ListGroup, Badge } from "react-bootstrap";
import { foto1 } from "../assets";

const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
];

const Cursos = () => {
  return (
    <>
      <div className="curso-header-main">
        {/* <Image src={cursoHeader} /> */}
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

      <div style={{ display: "flex", margin: "20px 0" }}>
        <ListGroup
          as="ol"
          numbered
          style={{ width: "90%", justifyContent: "center" }}
        >
          {MESES.map((mes: string) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{mes}</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Cursos;
