import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Image, Card } from "react-bootstrap";
import { bannerHeader2 } from "../assets";
import Voltar from "../components/Voltar";

const Clinica = () => {
  return (
    <>
      <picture>
        <Image src={bannerHeader2} style={{ width: "100%", height: "200px" }} />
      </picture>
      <div style={{ display: "flex", justifyItems: "center" }}>
        <Card
          style={{
            width: "98%",
            margin: "1% 1% 1% 1%",
          }}
        >
          <Card.Body style={{ padding: "1% 5%" }}>
            <Card.Title>A Clinica</Card.Title>
            <Card.Header>
              Somos uma Clínica especializada em FACE, mas com todas as
              especialidades da Odontologia disponíveis.
            </Card.Header>
            <Card.Text>
              A visão global do paciente, dentro do contexto multidisciplinar,
              permite o alcance de resultados mais confiáveis e duradouros.
              Porém é muito importante, antes de tudo, olhar e entender a
              expectativa do paciente para honrar nossa responsabilidade com sua
              saúde e bem estar, fornecendo o máximo de comprometimento com seu
              tratamento.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <ImageList sx={{ width: '90%', margin:'1% 5%' }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem style={{margin: '25px'}} key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Voltar />
    </>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];


export default Clinica;
