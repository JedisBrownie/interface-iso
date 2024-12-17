import axios from "axios";
import { getFormDataEnregistrement, getFormDataFiche, getFormDataProcessus, getFormDataSousProcessus } from "./champ";




export function insertProcessus(references) {
    const data = getFormDataProcessus(references);
    console.log(data);
    return data;
}


export function insertSousProcessus(references) {
    const data = getFormDataSousProcessus(references);
    console.log(data);
    return data;
}


export function insertFiche(references) {
    const data = getFormDataFiche(references);
    return data;
}


export function insertEnregistrement(references) {
    const data = getFormDataEnregistrement(references);
    console.log(data);
    return data;
}


export function insertNavigateur(references) {
    const data = getFormDataEnregistrement(references);
    console.log(data);
    return data;
}




// Brouillon
export function insertBrouillonProcessus(typeId, reference) {
    getFormDataProcessus(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            if (element.reference === "typeDocument") {
                typeDocument = element.valeur;
            }
            if (element.reference === "champTitre") {
                titre = element.valeur;
            }
            if (element.reference === "champMiseApplication") {
                miseEnApplication = element.valeur;
            }
            if (element.reference === "champConfidentiel") {
                switch (element.valeur) {
                    case 'Oui':
                        confidentiel = true;
                        break;
                    case 'Non':
                        confidentiel = false;
                        break;
                    default:
                        break;
                }
            }
        });

        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user.user_matricule);
        
        const requestData = new URLSearchParams();
        requestData.append('titre', titre);
        requestData.append('type', typeDocument.toString());
        requestData.append('date_mise_application', miseEnApplication);
        requestData.append('confidentiel', confidentiel.toString());
        requestData.append('user_matricule', user.user_matricule);

        axios.post('http://10.192.193.81:8080/document/add-draft', requestData);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertBrouillonSousProcessus(reference) {
    const data = getFormDataSousProcessus(reference);
    console.log(data);
    return data;
}


export function insertBrouillonFiche(reference) {
    const data = getFormDataFiche(reference);
    console.log(data);
    return data;
}


export function insertBrouillonEnregistrement(reference) {
    const data = getFormDataEnregistrement(reference);
    console.log(data);
    return data;
}


export function insertBrouillonNavigateur(reference) {
    const data = getFormDataEnregistrement(reference);
    console.log(data);
    return data;
}