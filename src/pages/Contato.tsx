import { Form, ListGroup } from "react-bootstrap";

const Contato = () => {
  return (
    <>
      <div className="curso-header-main">
        {/* <Image src={cursoHeader} /> */}
      </div>
      <section
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "10px",
        }}
      >
        <div
          style={{
            gridColumn: 1,
            alignItems: "center",
            width: "100%",
            margin: 'auto'
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>

        <div
          style={{
            gridColumn: 2,
            padding: "10px",
            borderLeft: "1px solid gray",
          }}
        >
          <ListGroup>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
            <ListGroup.Item variant="success">Success</ListGroup.Item>
            <ListGroup.Item variant="danger">Danger</ListGroup.Item>
            <ListGroup.Item variant="warning">Warning</ListGroup.Item>
            <ListGroup.Item variant="info">Info</ListGroup.Item>
            <ListGroup.Item variant="light">Light</ListGroup.Item>
            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
          </ListGroup>
        </div>
      </section>
    </>
  );
};

export default Contato;
