import axios from "axios";
import { getFormDataEnregistrement, getFormDataFiche, getFormDataProcessus, getFormDataSousProcessus } from "./champ";




export function insertProcessus(typeId, reference) {
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
        const uploadedFiles = JSON.parse(localStorage.getItem("uploaded_files")); 
        // console.log(user.user_matricule);
        
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('type', typeDocument.toString());
        formData.append('date_mise_application', miseEnApplication);
        formData.append('confidentiel', confidentiel.toString());
        formData.append('user_matricule', user.user_matricule);
        formData.append('data', JSON.stringify(data));

        uploadedFiles.forEach(file => {
            const fileBlob = fetch(file.fileURL)
                .then(response => response.blob())
                .catch(err => console.error("File fetch failed", err));
            formData.append('files', new File([fileBlob], file.fileName));
        });

        console.log(formData);

        axios.post('http://10.192.193.81:8080/document/add-redaction', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertSousProcessus(reference) {
    const data = getFormDataSousProcessus(reference);
    console.log(data);
    return data;
}


export function insertFiche(reference) {
    const data = getFormDataFiche(reference);
    return data;
}


export function insertEnregistrement(reference) {
    const data = getFormDataEnregistrement(reference);
    console.log(data);
    return data;
}


export function insertNavigateur(reference) {
    const data = getFormDataEnregistrement(reference);
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
        const uploadedFiles = JSON.parse(localStorage.getItem("uploaded_files")); 
        // console.log(user.user_matricule);
        
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('type', typeDocument.toString());
        formData.append('date_mise_application', miseEnApplication);
        formData.append('confidentiel', confidentiel.toString());
        formData.append('user_matricule', user.user_matricule);
        formData.append('data', JSON.stringify(data));

        uploadedFiles.forEach(file => {
            const fileBlob = fetch(file.fileURL)
                .then(response => response.blob())
                .catch(err => console.error("File fetch failed", err));
            formData.append('files', new File([fileBlob], file.fileName));
        });

        console.log(formData);

        axios.post('http://10.192.193.81:8080/document/add-draft', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
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