import React, {useState, useEffect} from "react";
import "./table.css";
import Employees from "../Employees/Employees";
import Api from '../../utils/API'; 

function Table() {

    const [employees, setEmployees] = useState([]); 

    useEffect(() => {
        Api.getEmployees()
        .then(data => {
            console.log(data.data.results); 

            setEmployees(data.data.results); 
        })
       
    }, [])



    return (
        <table className="table">
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
               employees.length ? employees.map((employee, index) => {
                  return (  <Employees data={employee} key={index} /> )
               }): (<div>no employees</div>)
 
             }

            </tbody>
        </table>
    );
}

export default Table;