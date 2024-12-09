// import '../../assets/fomantic/dist/semantic.min.css';
import Navbar from "../../components/navbar/Navbar";
import Schema from "../../components/schema/Schema";
import { useState,useEffect } from "react";
import { getDataFromUrl } from "../../function";
import { useLocation } from "react-router-dom";


export default function Home() {

    const[listeProcessus , setListeProcessus] = useState([]);
    const[isLoading , setIsLoading] = useState(true);

    const location = useLocation();
    const apiUrl = "http://localhost:8080";

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const user = queryParams.get("user");
        if (user) {
            console.log("Received user:", decodeURIComponent(user));
            localStorage.setItem("user", decodeURIComponent(user));
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