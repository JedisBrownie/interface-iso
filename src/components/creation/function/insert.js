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
        console.log("Processed data:", processedResult);
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