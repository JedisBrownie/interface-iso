import { getFormDataEnregistrement, getFormDataFiche, getFormDataProcessus, getFormDataSousProcessus } from "./champ";



export function insertSousProcessus(references){
    const data = getFormDataSousProcessus(references);
    return data;
}

export function insertProcessus(references){
    const data = getFormDataProcessus(references);
    return data;
}

export function insertFiche(references){
    const data = getFormDataFiche(references);
    return data;
}

export function insertEnregistrement(references){
    const data = getFormDataEnregistrement(references);
    return data;
}