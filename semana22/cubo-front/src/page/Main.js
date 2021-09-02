import React, { useContext } from "react";
import Graph from "../components/Graph/Graph";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import DataContext from "../global/DataContext";
import { DisplayData, DisplayTitle, MainPage } from "./styled";

function Main() {
  const { users } = useContext(DataContext);

  const userList = users.map((user) => {
    return {
      name: user.name,
      lastName: user.last_name,
      participation: user.participation,
    };
  });


  return (
    <MainPage>
      <Header/>
        <DisplayTitle>
          <h1>DATA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. 
            Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
          </p>
        </DisplayTitle>
      <DisplayData>
        <Table user={userList} />
        <Graph user={userList}/>
      </DisplayData>
    </MainPage>
  );
}

export default Main;
