import axios from "axios";
import { getFormDataEnregistrement, getFormDataFiche, getFormDataProcessus, getFormDataSousProcessus } from "./champ";




export function insertDocumentProcessus(typeId, reference) {
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-redaction', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertDocumentSousProcessus(typeId, reference) {
    getFormDataSousProcessus(typeId, reference)
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-redaction', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertDocumentFiche(typeId, reference) {
    getFormDataFiche(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-redaction', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertDocumentEnregistrement(typeId, reference) {
    getFormDataEnregistrement(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-redaction', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertDocumentNavigateur(typeId, reference) {
    getFormDataEnregistrement(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-redaction', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
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

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-draft', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertBrouillonSousProcessus(typeId, reference) {
    getFormDataSousProcessus(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-draft', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertBrouillonFiche(typeId, reference) {
    getFormDataFiche(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-draft', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertBrouillonEnregistrement(typeId, reference) {
    getFormDataEnregistrement(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-draft', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


export function insertBrouillonNavigateur(typeId, reference) {
    getFormDataEnregistrement(typeId, reference)
    .then((formData) => {
        return formData;
    })
    .then((processedResult) => {
        const data = processedResult;
        console.log(data);

        // let typeDocument = 0;
        let titre = null;
        let miseEnApplication = null;
        let confidentiel = null;

        data.forEach(element => {
            // if (element.reference === "typeDocument") {
            //     typeDocument = element.valeur;
            // }
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
        formData.append('type', typeId.toString());
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

        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';
        axios.post(backEnd + '/document/add-draft', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}