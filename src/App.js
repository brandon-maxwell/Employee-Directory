import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import Search from "./components/Search/index"
import Table from "./components/Table/Table";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <Wrapper>
      <Header>
      </Header>
      <Search>
      </Search>
      <Table>
        <Employees>

        </Employees>
      </Table>
    </Wrapper>
  );
}

export default App;
