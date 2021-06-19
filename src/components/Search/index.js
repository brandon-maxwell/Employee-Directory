import React, {useState, useEffect} from "react";
import "./style.css";
import Api from '../../utils/API'; 


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search() {

 const [useInput, setUserinput] = useState(''); 
 const [EmployeeData, setEmployeeData] = useState([]);

 useEffect(() => {
  Api.getEmployees()
  .then(data => {
      console.log(data.data.results); 

      setEmployeeData(data.data.results); 
  })
 
}, [])

 useEffect(() => {
  //  use employeeData to filter array -- use filter
 }, [useInput])

 console.log(useInput)
 console.log(EmployeeData)
  return (
    <form className="search">
      <div className="form-group">
        <input className="search" type="text" placeholder="Search" value={useInput} onChange={(e) => setUserinput(e.target.value)} >
        </input>
      </div>
    </form>
  );
}

export default Search;
