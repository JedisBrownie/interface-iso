// import { useReferenceEnregistrement } from "./reference/referenceEnregistrement";
// import { useReferenceFiche } from "./reference/referenceFiche";
// import { useReferenceProcessus } from "./reference/referenceProcessus";
// import { useReferenceSousProcessus } from "./reference/referenceSousProcessus";




/**
 * Data Methods
 */
export function splitSection2(data) {
    return data.split(',').map(item => item.trim());
}

export function splitProcessus(data) {
    return data.split(',').map(item => {
        const match = item.trim().match(/^\d+/);
        return match ? parseInt(match[0], 10) : null;
    }).filter(id => id !== null);
}

export function splitUser(data) {
    return data.split(',').map(item => {
        const [prenom, nom] = item.trim().split('-');
        return { nom, prenom };
    });
}



/**
 * Processus Data Fetching
 */
export async function getFormDataProcessus(typeId, references){
    /**
     * Data Fetching
     */
    const type = typeId;
    const titre = references.champTitre.current.textContent;
    const dateMiseApplication = references.champMiseApplication.current.value;
    const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
                         ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
    const iso9001 = references.choixIso9001.current.textContent;
    const iso14001 = references.choixIso14001.current.textContent;
    const securite = references.choixSecurite.current.textContent;
    const siteIso9001 = references.choixSiteIso9001.current.textContent;
    const siteIso14001 = references.choixSiteIso14001.current.textContent; 
    const siteSecurite = references.choixSiteSecurite.current.textContent;
    
    const processusGlobal = references.choixProcessusGlobal.current.textContent;
    const processusLie = references.choixProcessusLie.current.textContent;
    
    const finalite = references.champFinalite.current.innerHTML;
    const domaineApplication = references.champDomaineApplication.current.innerHTML;
    const piloteProcessus = references.choixPilote.current.textContent;
    const conditionContrainte = references.champConditionContrainte.current.innerHTML;

    const donneeEntree = references.champDonneeEntre.current.innerHTML;
    const donneeSortie = references.champDonneeSortie.current.innerHTML;
    const processusAppelant = references.champProcessusAppelant.current.textContent;
    const procesussAppele = references.champProcessusAppele.current.textContent;

    const diffusionEmail = references.choixDiffusionEmail.current.textContent;
    const diffusionPapier = references.choixDiffusionPapier.current.textContent;

    const redacteur = references.choixRedacteur.current.textContent;
    const verificateur = references.choixVerificateur.current.textContent;
    const approbateur = references.choixApprobateur.current.textContent;

    const quiRealise = references.champQuiRealise.current.innerHTML;
    const quiDecide = references.champQuiDecide.current.innerHTML;
    const quiFaitQuoiDescription = references.champFaitQuoiDescription.current.innerHTML;
    const lienMoyenDescription = references.champLienMoyenDescription.current.innerHTML;

    const quiFaitQuoiCommentaire = references.champFaitQuoiCommentaire.current.innerHTML;
    const lienMoyenCommentaire = references.champLienMoyenCommentaire.current.innerHTML;

    const performanceAttendues = references.champPerformanceAttendues.current.innerHTML;
    const propositionSurveillance = references.champPropositionSurveillance.current.innerHTML;
    const indicateurEventuel = references.champIndicateurEventuel.current.innerHTML;

    const evenementFrequence = references.champEvenementFrequence.current.innerHTML;
    const participant = references.champParticipant.current.innerHTML;
    const pointAbordes = references.champPointAbordes.current.innerHTML;
    const document = references.champDocument.current.innerHTML;


    const getUploadedFilesFromLocalStorage = () => {
        const uploadedFiles = JSON.parse(localStorage.getItem('uploaded_files')) || [];
        return uploadedFiles;
    };

    const fileBlobArray = await getUploadedFilesFromLocalStorage(); 


    /**
     * Final Data
     */
    const formData = [
        {reference : 'typeDocument' , champ : 'type' , valeur : type, tableau_valeur: null},
        {reference : 'champTitre' , champ : 'titre' , valeur : titre, tableau_valeur: null},
        {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication, tableau_valeur: null},
        {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel, tableau_valeur: null},
        {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001, tableau_valeur: splitSection2(iso9001)},
        {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001, tableau_valeur: splitSection2(iso14001)},
        {reference : 'choixSecurite' , champ : 'securite' , valeur : securite, tableau_valeur: splitSection2(securite)},
        {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001, tableau_valeur: splitSection2(siteIso9001)},
        {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001, tableau_valeur: splitSection2(siteIso14001)},
        {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite, tableau_valeur: splitSection2(siteSecurite)},
        {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal, tableau_valeur: splitProcessus(processusGlobal)},
        {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie, tableau_valeur: splitProcessus(processusLie)},
        {reference : 'champFinalite' , champ : 'finalite' , valeur : finalite, tableau_valeur: null},
        {reference : 'champDomaineApplication' , champ : 'domaineApplication' , valeur : domaineApplication, tableau_valeur: null},
        {reference : 'choixPilote' , champ : 'piloteProcessus' , valeur : piloteProcessus, tableau_valeur: null},
        {reference : 'champConditionContrainte' , champ : 'conditionContrainte' , valeur : conditionContrainte, tableau_valeur: null},
        {reference : 'champDonneeEntre' , champ : 'donneeEntree' , valeur : donneeEntree, tableau_valeur: null},
        {reference : 'champDonneeSortie' , champ : 'donneeSortie' , valeur : donneeSortie, tableau_valeur: null},
        {reference : 'champProcessusAppelant' , champ : 'processusAppelant' , valeur : processusAppelant, tableau_valeur: splitProcessus(processusAppelant)},
        {reference : 'champProcessusAppele' , champ : 'procesussAppele' , valeur : procesussAppele, tableau_valeur: splitProcessus(procesussAppele)},
        {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail, tableau_valeur: splitUser(diffusionEmail)},
        {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier, tableau_valeur: null},
        {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur, tableau_valeur: splitUser(redacteur)},
        {reference : 'choixVerificateur' , champ : 'verificateur' , valeur : verificateur, tableau_valeur: splitUser(verificateur)},
        {reference : 'choixApprobateur' , champ : 'approbateur' , valeur : approbateur, tableau_valeur: splitUser(approbateur)},
        {reference : 'champQuiRealise' , champ : 'quiRealise' , valeur :  quiRealise, tableau_valeur: null},
        {reference : 'champQuiDecide' , champ : 'quiDecide' , valeur :  quiDecide, tableau_valeur: null},
        {reference : 'champFaitQuoiDescription' , champ : 'quiFaitQuoi' , valeur :  quiFaitQuoiDescription, tableau_valeur: null},
        {reference : 'champLienMoyenDescription' , champ : 'lienMoyen' , valeur :  lienMoyenDescription, tableau_valeur: null},
        {reference : 'champFaitQuoiCommentaire' , champ : 'quiFaitQuoiCommentaire' , valeur : quiFaitQuoiCommentaire, tableau_valeur: null},
        {reference : 'champLienMoyenCommentaire' , champ : 'lienMoyenCommentaire' , valeur : lienMoyenCommentaire, tableau_valeur: null},
        {reference : 'champPerformanceAttendues' , champ : 'performanceAttendues' , valeur : performanceAttendues, tableau_valeur: null},
        {reference : 'champPropositionSurveillance' , champ : 'propositionSurveillance' , valeur : propositionSurveillance, tableau_valeur: null},
        {reference : 'champIndicateurEventuel' , champ : 'indicateurEventuel' , valeur : indicateurEventuel, tableau_valeur: null},
        {reference : 'champEvenementFrequence' , champ : 'evenementFrequence' , valeur : evenementFrequence, tableau_valeur: null},
        {reference : 'champParticipant' , champ : 'participant' , valeur : participant, tableau_valeur: null},
        {reference : 'champPointAbordes' , champ : 'pointAbordes' , valeur : pointAbordes, tableau_valeur: null},
        {reference : 'champDocument' , champ : 'document' , valeur : document, tableau_valeur: null},
        {reference : 'champDocumentDeSupport' , champ : 'documentDeSupport' , valeur : null, tableau_valeur: fileBlobArray},
    ];

    return formData;
}




/**
 * Sous Processus Data Fetching
 */
export async function getFormDataSousProcessus(typeId, references){

    const type = typeId;
    const titre = references.champTitre.current.textContent;
    const dateMiseApplication = references.champMiseApplication.current.value;
    const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
        ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
    const iso9001 = references.choixIso9001.current.textContent;
    const iso14001 = references.choixIso14001.current.textContent;
    const securite = references.choixSecurite.current.textContent;
    const siteIso9001 = references.choixSiteIso9001.current.textContent;
    const siteIso14001 = references.choixSiteIso14001.current.textContent; 
    const siteSecurite = references.choixSiteSecurite.current.textContent;
    
    const processusGlobal = references.choixProcessusGlobal.current.textContent;
    const processusLie = references.choixProcessusLie.current.textContent;
    
    const finalite = references.champFinalite.current.innerHTML;
    const domaineApplication = references.champDomaineApplication.current.innerHTML;
    const piloteProcessus = references.choixPilote.current.textContent;
    const conditionContrainte = references.champConditionContrainte.current.innerHTML;

    const donneeEntree = references.champDonneeEntre.current.innerHTML;
    const donneeSortie = references.champDonneeSortie.current.innerHTML;
    const processusAppelant = references.champProcessusAppelant.current.textContent;
    const procesussAppele = references.champProcessusAppele.current.textContent;

    const diffusionEmail = references.choixDiffusionEmail.current.textContent;
    const diffusionPapier = references.choixDiffusionPapier.current.textContent;

    const redacteur = references.choixRedacteur.current.textContent;
    const verificateur = references.choixVerificateur.current.textContent;
    const approbateur = references.choixApprobateur.current.textContent;

    const lecteur = references.choixLecteur.current.textContent;

    const quiRealise = references.champQuiRealise.current.innerHTML;
    const quiDecide = references.champQuiDecide.current.innerHTML;
    const quiFaitQuoiDescription = references.champFaitQuoiDescription.current.innerHTML;
    const lienMoyenDescription = references.champLienMoyenDescription.current.innerHTML;

    const getUploadedFilesFromLocalStorage = () => {
        const uploadedFiles = JSON.parse(localStorage.getItem('uploaded_files')) || [];
        return uploadedFiles;
    };

    const fileBlobArray = await getUploadedFilesFromLocalStorage();

    const formData = [
        {reference : 'typeDocument' , champ : 'type' , valeur : type, tableau_valeur: null},
        {reference : 'champTitre' , champ : 'titre' , valeur : titre, tableau_valeur: null},
        {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication, tableau_valeur: null},
        {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel, tableau_valeur: null},
        {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001, tableau_valeur: splitSection2(iso9001)},
        {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001, tableau_valeur: splitSection2(iso14001)},
        {reference : 'choixSecurite' , champ : 'securite' , valeur : securite, tableau_valeur: splitSection2(securite)},
        {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001, tableau_valeur: splitSection2(siteIso9001)},
        {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001, tableau_valeur: splitSection2(siteIso14001)},
        {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite, tableau_valeur: splitSection2(siteSecurite)},
        {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal, tableau_valeur: splitProcessus(processusGlobal)},
        {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie, tableau_valeur: splitProcessus(processusLie)},
        {reference : 'champFinalite' , champ : 'finalite' , valeur : finalite, tableau_valeur: null},
        {reference : 'champDomaineApplication' , champ : 'domaineApplication' , valeur : domaineApplication, tableau_valeur: null},
        {reference : 'choixPilote' , champ : 'piloteProcessus' , valeur : piloteProcessus, tableau_valeur: null},
        {reference : 'champConditionContrainte' , champ : 'conditionContrainte' , valeur : conditionContrainte, tableau_valeur: null},
        {reference : 'champDonneeEntre' , champ : 'donneeEntree' , valeur : donneeEntree, tableau_valeur: null},
        {reference : 'champDonneeSortie' , champ : 'donneeSortie' , valeur : donneeSortie, tableau_valeur: null},
        {reference : 'champProcessusAppelant' , champ : 'processusAppelant' , valeur : processusAppelant, tableau_valeur: splitProcessus(processusAppelant)},
        {reference : 'champProcessusAppele' , champ : 'procesussAppele' , valeur : procesussAppele, tableau_valeur: splitProcessus(procesussAppele)},
        {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail, tableau_valeur: splitUser(diffusionEmail)},
        {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier, tableau_valeur: null},
        {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur, tableau_valeur: splitUser(redacteur)},
        {reference : 'choixVerificateur' , champ : 'verificateur' , valeur : verificateur, tableau_valeur: splitUser(verificateur)},
        {reference : 'choixApprobateur' , champ : 'approbateur' , valeur : approbateur, tableau_valeur: splitUser(approbateur)},
        {reference : 'choixLecteur' , champ : 'lecteur' , valeur : lecteur , tableau_valeur: null},
        {reference : 'champQuiRealise' , champ : 'quiRealise' , valeur :  quiRealise, tableau_valeur: null},
        {reference : 'champQuiDecide' , champ : 'quiDecide' , valeur :  quiDecide, tableau_valeur: null},
        {reference : 'champFaitQuoiDescription' , champ : 'quiFaitQuoi' , valeur :  quiFaitQuoiDescription, tableau_valeur: null},
        {reference : 'champLienMoyenDescription' , champ : 'lienMoyen' , valeur :  lienMoyenDescription, tableau_valeur: null},
        {reference : 'champDocumentDeSupport' , champ : 'documentDeSupport' , valeur : null, tableau_valeur: fileBlobArray},
    ];

    return formData;
}




/**
 * Enregistrement Data Fetching
 */
export async function getFormDataEnregistrement(typeId, references){

        const type = typeId;
        const titre = references.champTitre.current.textContent;
        const dateMiseApplication = references.champMiseApplication.current.value;
        const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
            ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';

        const iso9001 = references.choixIso9001.current.textContent ;
        const iso14001 = references.choixIso14001.current.textContent;
        const securite = references.choixSecurite.current.textContent;
        
        const siteIso9001 = references.choixSiteIso9001.current.textContent;
        const siteIso14001 = references.choixSiteIso14001.current.textContent; 
        const siteSecurite = references.choixSiteSecurite.current.textContent;
        
        const processusGlobal = references.choixProcessusGlobal.current.textContent;
        const processusLie = references.choixProcessusLie.current.textContent;
        
      
        const diffusionEmail = references.choixDiffusionEmail.current.textContent;
        const diffusionPapier = references.choixDiffusionPapier.current.textContent;
        const diffusionEmailExterne = references.choixDiffusionEmailExterne.current.textContent;

        const redacteur = references.choixRedacteur.current.textContent;
        
        // var lecteur = '';
        // if(references.choixLecteur.current){
        //     lecteur = references.choixLecteur.current.textContent ;
        // }else{
        //     console.log("pas de lecteur");
        // }
        
        const champLibre = references.champChampLibre.current.innerHTML;

        const getUploadedFilesFromLocalStorage = () => {
            const uploadedFiles = JSON.parse(localStorage.getItem('uploaded_files')) || [];
            return uploadedFiles;
        };
    
        const fileBlobArray = await getUploadedFilesFromLocalStorage();

        const formData = [
            {reference : 'typeDocument' , champ : 'type' , valeur : type, tableau_valeur: null},
            {reference : 'champTitre' , champ : 'titre' , valeur : titre, tableau_valeur: null},
            {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication, tableau_valeur: null},
            {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel, tableau_valeur: null},
            {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001, tableau_valeur: splitSection2(iso9001)},
            {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001, tableau_valeur: splitSection2(iso14001)},
            {reference : 'choixSecurite' , champ : 'securite' , valeur : securite, tableau_valeur: splitSection2(securite)},
            {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001, tableau_valeur: splitSection2(siteIso9001)},
            {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001, tableau_valeur: splitSection2(siteIso14001)},
            {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite, tableau_valeur: splitSection2(siteSecurite)},
            {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal, tableau_valeur: splitProcessus(processusGlobal)},
            {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie, tableau_valeur: splitProcessus(processusLie)},
            {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail, tableau_valeur: splitUser(diffusionEmail)},
            {reference : 'choixDiffusionEmailExterne' , champ : 'diffusionEmailExterne' , valeur : diffusionEmailExterne, tableau_valeur: null},
            {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier, tableau_valeur: null},
            {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur, tableau_valeur: splitUser(redacteur)},
            {reference : 'champChampLibre' , champ : 'champLibre' , valeur : champLibre, tableau_valeur: null},
            {reference : 'champDocumentDeSupport' , champ : 'documentDeSupport' , valeur : null, tableau_valeur: fileBlobArray},
        ];

    return formData;
}




/**
 * Fiche Data Fetching
 */
export async function getFormDataFiche(typeId, references){
    
    const type = typeId;
    const titre = references.champTitre.current.textContent;
    const dateMiseApplication = references.champMiseApplication.current.value;
    const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
        ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
    const iso9001 = references.choixIso9001.current.textContent;
    const iso14001 = references.choixIso14001.current.textContent;
    const securite = references.choixSecurite.current.textContent;
    const siteIso9001 = references.choixSiteIso9001.current.textContent;
    const siteIso14001 = references.choixSiteIso14001.current.textContent; 
    const siteSecurite = references.choixSiteSecurite.current.textContent;
    
    const processusGlobal = references.choixProcessusGlobal.current.textContent;
    const processusLie = references.choixProcessusLie.current.textContent;
    
    const finalite = references.champFinalite.current.innerHTML;
    const domaineApplication = references.champDomaineApplication.current.innerHTML;
    const conditionContrainte = references.champConditionContrainte.current.innerHTML;

    
    const diffusionEmail = references.choixDiffusionEmail.current.textContent;
    const diffusionPapier = references.choixDiffusionPapier.current.textContent;

    const redacteur = references.choixRedacteur.current.textContent;
    const verificateur = references.choixVerificateur.current.textContent;
    const approbateur = references.choixApprobateur.current.textContent;

    // var lecteur = '';
    // if(references.choixLecteur.current){
    //     lecteur = references.choixLecteur.current.textContent ;
    // }else{
    //     console.log("pas de lecteur");
    // }
    const quiFaitQuoiDescription = references.champFaitQuoiCommentaire.current.innerHTML;
    const lienMoyenDescription = references.champLienMoyenCommentaire.current.innerHTML;

    const getUploadedFilesFromLocalStorage = () => {
        const uploadedFiles = JSON.parse(localStorage.getItem('uploaded_files')) || [];
        return uploadedFiles;
    };

    const fileBlobArray = await getUploadedFilesFromLocalStorage();

    const formData = [
        {reference : 'typeDocument' , champ : 'type' , valeur : type, tableau_valeur: null},
        {reference : 'champTitre' , champ : 'titre' , valeur : titre, tableau_valeur: null},
        {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication, tableau_valeur: null},
        {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel, tableau_valeur: null},
        {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001, tableau_valeur: splitSection2(iso9001)},
        {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001, tableau_valeur: splitSection2(iso14001)},
        {reference : 'choixSecurite' , champ : 'securite' , valeur : securite, tableau_valeur: splitSection2(securite)},
        {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001, tableau_valeur: splitSection2(siteIso9001)},
        {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001, tableau_valeur: splitSection2(siteIso14001)},
        {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite, tableau_valeur: splitSection2(siteSecurite)},
        {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal, tableau_valeur: splitProcessus(processusGlobal)},
        {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie, tableau_valeur: splitProcessus(processusLie)},
        {reference : 'champFinalite' , champ : 'finalite' , valeur : finalite, tableau_valeur: null},
        {reference : 'champDomaineApplication' , champ : 'domaineApplication' , valeur : domaineApplication, tableau_valeur: null},
        {reference : 'champConditionContrainte' , champ : 'conditionContrainte' , valeur : conditionContrainte, tableau_valeur: null},
        {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail, tableau_valeur: splitUser(diffusionEmail)},
        {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier, tableau_valeur: null},
        {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur, tableau_valeur: splitUser(redacteur)},
        {reference : 'choixVerificateur' , champ : 'verificateur' , valeur : verificateur, tableau_valeur: splitUser(verificateur)},
        {reference : 'choixApprobateur' , champ : 'approbateur' , valeur : approbateur, tableau_valeur: splitUser(approbateur)},
        {reference : 'champFaitQuoiDescription' , champ : 'quiFaitQuoi' , valeur :  quiFaitQuoiDescription, tableau_valeur: null},
        {reference : 'champLienMoyenDescription' , champ : 'lienMoyen' , valeur :  lienMoyenDescription, tableau_valeur: null},
        {reference : 'champDocumentDeSupport' , champ : 'documentDeSupport' , valeur : null, tableau_valeur: fileBlobArray},
    ];

    return formData;
}



