import React from "react";
import "./table.css";

function Table(props) {
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
                <tr>
                    <td></td>
                    <td>Test</td>
                    <td>555-555-5555</td>
                    <td>Test@test.io</td>
                    <td>1/1/11</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;