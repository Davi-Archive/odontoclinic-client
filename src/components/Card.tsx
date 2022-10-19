import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface PropCard {
  image: string;
  title: string;
}

function CardComponent({ image, title }: PropCard) {
  return (
    <Card
      style={{
        minWidth: "20rem",
        width: "28rem",
        margin: "10px",
      }}
      className="card-box"
    >
      {image}
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
