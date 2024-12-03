// import '../../assets/fomantic/dist/semantic.min.css';
import Navbar from "../../components/navbar/Navbar";
import Schema from "../../components/schema/Schema";
import { useState,useEffect } from "react";
import { getDataFromUrl } from "../../function";
export default function Home(){

    const[listeProcessus , setListeProcessus] = useState([]);
    const[isLoading , setIsLoading] = useState(true);

    const apiUrl = "http://localhost:8080";

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await getDataFromUrl(`${apiUrl}/processus/global/all`);
                const result = {};
                response.forEach(processus => {
                    result[processus.idProcessusGlobal] = processus.processusLie;
                });
                setListeProcessus(result);
            } catch (error) {
                console.error("Erreur lors de la récupération des données : ",error.message);
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
    },[]);

    
    return(
        <>
            <Navbar></Navbar>
            {isLoading ?(
                <></>
            ): (
                <Schema data={listeProcessus}></Schema>
            )}
            
        </>
    );
}