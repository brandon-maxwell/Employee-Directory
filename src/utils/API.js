import axios from "axios";
const APIURL = "https://randomuser.me/api/?inc=picture,name,phone,email,dob&results=25&nat=us";

let request = {
  getEmployees: function() {
    return axios.get(APIURL);
  },
};

export default request