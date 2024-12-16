// import '../../assets/fomantic/dist/semantic.min.css';
import Navbar from "../../components/navbar/Navbar";
import Schema from "../../components/schema/Schema";
import { useState,useEffect } from "react";
import { getDataFromUrl } from "../../function";
import { useLocation } from "react-router-dom";


export default function Home() {

    const[listeProcessus , setListeProcessus] = useState([]);
    const[isLoading , setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const location = useLocation();
    const apiUrl = "http://10.192.193.81:8080";

    useEffect(() => {
        /**
         * Lazy User Fetching
         */
        // const queryParams = new URLSearchParams(location.search);
        // const user = queryParams.get("user");
        // if (user) {
        //     console.log("Received user:", decodeURIComponent(user));
        //     localStorage.setItem("user", decodeURIComponent(user));
        // }

        /**
         * Token User Fetching
         */
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            fetch(`http://10.192.193.81:3005/redirect/get-user-data?token=${token}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch the user data');
                }
                return response.json();
            })
            .then(data => {
                setUser(data.user);
                const jsonString = JSON.stringify(data.user);
                localStorage.setItem('user', JSON.parse(jsonString));
            })
            .catch(error => console.error("Error fetching user data:", error));
        }

        const fetchData = async () => {
            try {
                const response = await getDataFromUrl(`${apiUrl}/processus/global/all`);
                const result = {};
                response.forEach(processus => {
                    result[processus.idProcessusGlobal] = processus.processusLie;
                });
                setListeProcessus(result);
            } catch (error) {
                console.error("Erreur lors de la récupération des données : ",error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    },[location]);

    
    return(
        <>
            <Navbar></Navbar>
            {isLoading ? (
                <></>
            ) : (
                <Schema data={listeProcessus}></Schema>
            )}
            
        </>
    );
}