import React from "react";
import "./employees.css";

function Employees (props) {
   
    const { data } = props; 
    const { phone, email, dob, name, picture } = data; 

    return (
        <tr>
            <td> <img src={picture.medium} alt={name.first}/> </td>
            <td>{`${name.first} ${name.last}`}</td>
            <td>{phone}</td>
            <td><a href={"mailto:" + email}>{email}</a></td>
            <td>{dob.date.slice(0,10)}</td>
        </tr>
      
    )    
}

export default Employees;