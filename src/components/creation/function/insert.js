import { getFormDataEnregistrement, getFormDataFiche, getFormDataProcessus, getFormDataSousProcessus } from "./champ";


export function insertSousProcessus(references){
    const data = getFormDataSousProcessus(references);
    console.log(data);
    return data;
}

export function insertProcessus(references){
    const data = getFormDataProcessus(references);
    console.log(data);
    return data;
}

export function insertFiche(references){
    const data = getFormDataFiche(references);
    return data;
}

export function insertEnregistrement(references){
    const data = getFormDataEnregistrement(references);
    console.log(data);
    return data;
}



// brouillon

export function insertBrouillonSousProcessus(reference){
    const data = getFormDataSousProcessus(reference);
    console.log(data);
    return data;
}

export function insertBrouillonProcessus(reference){
    const data = getFormDataProcessus(reference);
    console.log(data);
    return data;
}

export function insertBrouillonFiche(reference){
    const data = getFormDataFiche(reference);
    console.log(data);
    return data;
}

export function insertBrouillonEnregistrement(reference){
    const data = getFormDataEnregistrement(reference);
    console.log(data);
    return data;
}
