import axios from "axios";




/**
 * Data
 */
let data = [];
const apiUrl = process.env.REACT_APP_NODE_API_URL;

const fetchData = () => {
    axios.get(`${apiUrl}/users/all`)
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