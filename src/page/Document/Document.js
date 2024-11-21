import { useParams } from "react-router-dom";
import Processus from "../../components/creation/Processus";
import SousProcessus from "../../components/creation/SousProcessus";
import Fiche from "../../components/creation/Fiche";
import Enregistrement from "../../components/creation/Enregistrement";
import DocumentMenu from "../../components/shared/DocumentMenu";
import React from "react";
import Navigateur from "../../components/creation/Navigateur";
import { Alert } from "@mui/material";
export default function Document(){

    const {status,type,reference,version} = useParams();
    const raisonRef = React.useRef(null);

    const edition = false;

    // misolo donnee API
    const allValeudDocument = [

        {
            reference : 'BR100-20241112-5',
            titre : "<span className='span-edited' style={{fontSize:'18px'}}>Chargement camion de livraion</span>",
            champ : [
                {reference : 'champTitre' , texte : false ,    valeur:'<h1>Nouveau Titre<h1>'},
                {reference : 'champMiseApplication' , texte : true , isValue : true , valeur : '2024 / 10 / 12'},
                {reference : 'champConfidentiel' , texte : true , isValue : true , valeur : 'Oui'},
                {reference : 'choixIso9001' , texte : true , valeur : 'Support'},
                {reference : 'choixIso14001' , texte : true , valeur : 'Support'},
                {reference : 'choixSecurite' , texte : true , valeur : 'Securite'},
                {reference : 'choixSiteIso9001' , texte : true , valeur : 'Tana'},
                {reference : 'choixSiteIso14001' , texte : true , valeur : 'Tana'},
                {reference : 'choixSiteSecurite' , texte : true , valeur : 'Tana'},
                {reference : 'choixProcessusGlobal' , texte : true , valeur : '2000 - Ressources'},
                {reference : 'choixProcessusLie' , texte : true , valeur : '2300 - Ressources Humaines'},
                {reference : 'choixRedacteur' , texte : true , valeur : 'Jaina Razafindrakoto'},
                {reference : 'champChampLibre' , texte : false , valeur : '<span style="color:red">Redaction an\'ilay procédure<span>'}
            ]
        }

    ];

    const getValeurChamp = (referenceChamp) => {
        // Recherche l'objet dans la liste `allValeudDocument` dont la référence correspond
        const document = allValeudDocument.find(doc => doc.reference === reference);
    
        if (!document) {
            console.error("Document introuvable pour la référence donnée.");
            return null;
        }
    
        // Recherche le champ spécifique en fonction de la référence du champ
        const champ = document.champ.find(champ => champ.reference === referenceChamp);
    
        if (!champ) {
            console.error("Champ introuvable pour la référence donnée.");
            return null;
        }
    
        return champ.valeur;
    };

    const valeurChamp= getValeurChamp(reference);



    const renderContent = () =>{
        switch(type){
            case '1' :
                return <Processus edition={edition} valeurChamp={valeurChamp}></Processus>
            case '2' : 
                return <SousProcessus edition={edition} valeurChamp={valeurChamp}></SousProcessus>
            case '3' : 
                return <Fiche edition={edition} valeurChamp={valeurChamp}></Fiche>
            case '4' :
                return <Enregistrement edition={edition} valeurChamp={valeurChamp}></Enregistrement>
            case '5' : 
                return <Navigateur edition={edition} valeurChamp={valeurChamp}></Navigateur>
        }
    }

    console.error = (function() {
        var error = console.error
    
        return function(exception) {
            if ((exception + '').indexOf('Warning: A component is `contentEditable`') !== 0) {
                error.apply(console, arguments)
            }
        }
    })()


    function validerDocument(reference,idDocument){

    }

    function approuverDocument(reference,idDocument){

    }

    function refuserValidationDocument(reference,idDocument,raison){

    }

    function refuserApprobationDocument(reference,idDocument,raison){

    }

    function getRaisonRefus(){
        const raison = raisonRef.current.textContent;
        return raison
    }


    return(
        <>  
            <DocumentMenu getRaisonRefus={(() => getRaisonRefus())} status={status} validerDocument={() => validerDocument()} approuverDocument = {() => approuverDocument()} refuserValidationDocument={() => refuserValidationDocument()} refuserApprobationDocument={() => refuserApprobationDocument()} raisonRef={raisonRef}></DocumentMenu>
            {/* <Alert severity="info" variant="filled" style={{width:'45em',margin:'auto',textAlign:'center'}}>Aina Razafindrakoto a demandé une demande de révision pour ce document. Pour le motif de : "Mise à jour"</Alert> */}
            {renderContent()}
        </>
    );
}