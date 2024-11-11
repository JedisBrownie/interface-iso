import data from "./user";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export function verifLogin(email, password) {
    const user = data.find(user => user.email === email && user.password === password);
    
    if (user) {
        // Créer un objet contenant uniquement les informations nécessaires
        const tokenData = {
            nom: user.nom,
            prenom: user.prenom,
            matricule: user.matricule,
            commite_direction: user.commite_direction
        };
        
        // Stocker l'objet dans le localStorage sous forme de chaîne JSON
        localStorage.setItem('userToken', JSON.stringify(tokenData));
        
        return user;
    }
    return false;
}

export function LogOut(){
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('userToken');
        navigate('/');
    }, [navigate]);

    return null; 
}