// import '../../assets/fomantic/dist/semantic.min.css';
import Navbar from "../../components/navbar/Navbar";
import Schema from "../../components/schema/Schema";
import { useState, useEffect } from "react";
import { getDataFromUrl } from "../../function";
import { useLocation } from "react-router-dom";
import axios from 'axios';


export default function Home() {

    const [userList, setUserList] = useState([]);
    const [listeProcessus , setListeProcessus] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const location = useLocation();

    useEffect(() => {
        /**
         * Token User Fetching
         */
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const backEndNode = window.location.hostname === 'localhost' ? 'http://localhost:3005' : 'http://10.192.193.81:3005';
        const backEndJava = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';

        if (token) {
            fetch(`${backEndNode}/redirect/get-user-data?token=${token}`)
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
                const response = await getDataFromUrl(`${backEndJava}/processus/global/all`);
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

        /**
         * All Users Fetching
         */
        const fetchAllUsers = async () => {
            const response = await axios.get(backEndNode + '/users/all', {
                headers: {
                    'Cache-Control': 'no-cache',
                }
            });
            const userList = response.data.all_users;

            localStorage.setItem('users', JSON.stringify(userList));
            setUserList(userList);
        };
        fetchAllUsers();
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