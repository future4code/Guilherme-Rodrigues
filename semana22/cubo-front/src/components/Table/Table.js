import React from "react";
import { TableStyled, ThStyled } from "./styled";

const Table = (props) => {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const users = props.user.map((user) => {
    return (
      <TableStyled>
        <ThStyled>{capitalizeFirstLetter(user.name)}</ThStyled>
        <ThStyled>{capitalizeFirstLetter(user.lastName)}</ThStyled>
        <ThStyled>{user.participation}%</ThStyled>
      </TableStyled>
    );
  });

  return (
    <div>
      <table>
        <TableStyled>
          <ThStyled>Nome</ThStyled>
          <ThStyled>Sobrenome</ThStyled>
          <ThStyled>Participação</ThStyled>
        </TableStyled>
        {users}
      </table>
    </div>
  );
};

export default Table;
