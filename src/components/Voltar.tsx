import Button from "react-bootstrap/Button";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Voltar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "0 40px 10px 0",
      }}
    >
      <Button
        onClick={() => navigate("/")}
        size="lg"
        active
        style={{ backgroundColor: "#785538", borderColor: "#C3A18D" }}
      >
        <BsArrowLeftSquareFill /> Voltar
      </Button>
    </div>
  );
};

export default Voltar;
