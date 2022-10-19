import React from "react";
import CardComponent from "../components/Card";

const tratamentos = [
  {
    img: "tituloIMG",
    title: "titulo",
  },
  {
    img: "tituloIMG2",
    title: "titulo2",
  },
  {
    img: "tituloIMG3",
    title: "titulo3",
  },
  {
    img: "tituloIMG3",
    title: "titulo3",
  },
  {
    img: "tituloIMG3",
    title: "titulo3",
  },
  {
    img: "tituloIMG3",
    title: "titulo3",
  },
  {
    img: "tituloIMG3",
    title: "titulo3",
  },
  {
    img: "tituloIMG3",
    title: "titulo3",
  },
];

const Tratamentos = () => {
  return (
    <div className="card-component-trat">
      {tratamentos.map((tratamento:any) => (
        <CardComponent image={tratamento.img} title={tratamento.title} />
      )
      )}
    </div>
  );
};

export default Tratamentos;
