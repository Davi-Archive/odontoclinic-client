import { Card, Image } from "react-bootstrap";
import { logo, bannerHeader1, bannerHeader3, foto1 } from "../assets";
import { useNavigate } from "react-router-dom";
import Voltar from "../components/Voltar";

const Sobre = () => {
  const navigate = useNavigate();
  return (
    <>
      <Image src={bannerHeader3} style={{ width: "100%", height: "200px" }} />
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
      <Image src={bannerHeader1} style={{ width: "100%", height: "200px" }} />
      <Card
        style={{
          width: "98%",
          backgroundColor: "#785538",
          color: "white",
          margin: "1% 1% 0 1%",
        }}
      >
        <Card.Body>
          <Card.Text style={{ padding: "5%" }}>
            A visão global do paciente, dentro do contexto multidisciplinar,
            permite o alcance de resultados mais confiáveis e duradouros. Porém
            é muito importante, antes de tudo, olhar e entender a expectativa do
            paciente para honrar nossa responsabilidade com sua saúde e bem
            estar, fornecendo o máximo de comprometimento com seu tratamento.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="light"
        text="dark"
        style={{ width: "98%", margin: "1% 1% 0 1%" }}
        className="mb-2"
      >
        <Card.Header>
          <Card.Title>Currículo</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <ul>
              <li>
                Graduação em Odontologia pela Universidade de São Paulo (
                FOUSP),2003
              </li>
              <li> Atualização em Ortodontia CETAO (2005)</li>
              <li>
                Atualização em Pesquisa Cínica em Ortodontia Straight Wire Roth
                FOUSP (2004-2019)
              </li>
              <li>
                {" "}
                Especialista em Ortodontia pela Universidade Metodista de São
                Paulo
              </li>
              <li>
                {" "}
                Pós Graduação em Oclusão Funcional pela Roth Williams Center for
                Functional Occlusion (2011)
              </li>
              <li>
                Mini Residency in Orofacial Pain, University of Kentucky (2012)
              </li>
              <li>Especialização em Harmonização Orofacial, Uningá ( 2019)</li>
              <li>Mestranda em Ortodontia, São Leopoldo Mandic (2021)</li>
              <li>
                {" "}
                Membro da Sociedade Paulista de Ortodontia (SPO) e Associação
                Brasileira de Ortodontia e Ortopedia Facial ( ABOR)
              </li>
              <li>
                Membro da Roth Williams International Society of Orthodontists (
                RWISO) e World Federation of Orthodontists ( WFO)
              </li>
              <li>
                {" "}
                Coordenadora do Grupo de Estudos Roth Williams Brasil
                Experiência na Área de Odontologia, com ênfase em Ortodontia,
                Cirurgia Ortogntática, Oclusão, Estética Orofacial e Disfunção
                Temporomandibular
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Voltar />
    </>
  );
};

export default Sobre;
