import axios from "axios";




/**
 * Data
 */
let data = [];

const fetchData = () => {
    axios.get("http://localhost:3005/users/all")
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