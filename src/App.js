import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import Search from "./components/Search/index"
import Table from "./components/Table/Table";
import Api from './utils/API';

function App() {

  const [EmployeeData, setEmployeeData] = useState([]);
  const [EmployeeDataFiltered, setEmployeeDataFiltered] = useState([]);


  useEffect(() => {
    Api.getEmployees()
      .then(data => {

        setEmployeeData(data.data.results);
        setEmployeeDataFiltered(data.data.results);
      })

  }, [])

  const searchEmployees = (searchString) => {
    const stringifyArray = EmployeeData.map((item) => {
      return JSON.stringify(item)
    })
    const result = stringifyArray.filter(data => data.includes(searchString));
    setEmployeeDataFiltered(result.map(i => JSON.parse(i)))
  }


  return (
    <Wrapper>
      <Header>
      </Header>
      <Search
        EmployeeData={EmployeeData}
        EmployeeDataFiltered={EmployeeDataFiltered}
        searchEmployees={searchEmployees}
      >
      </Search>
      <Table
        EmployeeData={EmployeeData}
        EmployeeDataFiltered={EmployeeDataFiltered}
        searchEmployees={searchEmployees}
      >

      </Table>
    </Wrapper>
  );
}

export default App;
