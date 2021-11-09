import React from "react";
import { Link, useParams } from "react-router-dom";

function Customer({ members }) {
  const params = useParams();
  const member = members.find(({ id }) => id === params.id);

  return (
    <div>
      <div>
        <h1>Detalhes do CLiente</h1>

        <p>Nome da Cliente: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default Customer;
