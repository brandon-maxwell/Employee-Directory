import React from "react";
import "./table.css";
import Employees from "../Employees/Employees";

function Table(props) {


    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th className="col">Image</th>
                    <th className="col">Name</th>
                    <th className="col">Phone</th>
                    <th className="col">Email</th>
                    <th className="col">DOB</th>
                </tr>
            </thead>
            <tbody>
             {
               (!!props.EmployeeDataFiltered && props.EmployeeDataFiltered.length) ? props.EmployeeDataFiltered.map((employee, index) => {
                  return (  <Employees data={employee} key={index} /> )
               }): (<div>no employees</div>)
 
             }

            </tbody>
        </table>
    );
}

export default Table;