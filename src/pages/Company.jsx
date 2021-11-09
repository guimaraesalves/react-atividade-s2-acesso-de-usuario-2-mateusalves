import React from "react";
import { Link, useParams } from "react-router-dom";

function Company({ members }) {
  const params = useParams();
  const member = members.find(({ id }) => id === params.id);

  return (
    <div>
      <div>
        <h1>Detalhes da Empresa</h1>

        <p>Nome da empresa: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default Company;
