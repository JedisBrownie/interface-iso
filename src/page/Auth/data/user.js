import axios from "axios";




/**
 * Data
 */
let data = [];
const apiUrl = process.env.REACT_APP_NODE_API_URL;

const fetchData = () => {
    const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:3005' : 'http://10.192.193.81:3005';
    axios.get(backEnd + '/users/all')
        .then(response => {
            data = response.data;
        })
        .catch(error => {
            console.error("Error fetching users:", error);
            data = [];
        });
};

fetchData();


/**
 * Data Export
 */
export default data;