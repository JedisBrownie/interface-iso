import { useParams } from "react-router-dom";
import Processus from "../../components/creation/Processus";
import SousProcessus from "../../components/creation/SousProcessus";
import Fiche from "../../components/creation/Fiche";
import Enregistrement from "../../components/creation/Enregistrement";
import DocumentMenu from "../../components/shared/DocumentMenu";
import React from "react";
export default function Document(){

    const {status,type,reference,version} = useParams();
    const raisonRef = React.useRef(null);

    const edition = false;

    // misolo donnee API
    const valeurChamp = [
        {reference : 'champMiseApplication' , texte : true , valeur : '2024 / 10 / 12'},
        {reference : 'champConfidentiel' , texte : true , valeur : 'Oui'},
        {reference : 'choixIso9001' , texte : true , valeur : 'Support'},
        {reference : 'choixIso14001' , texte : true , valeur : 'Support'},
        {reference : 'choixSecurite' , texte : true , valeur : 'Securite'},
        {reference : 'choixSiteIso9001' , texte : true , valeur : 'Tana'},
        {reference : 'choixSiteIso14001' , texte : true , valeur : 'Tana'},
        {reference : 'choixSiteSecurite' , texte : true , valeur : 'Tana'},
        {reference : 'choixProcessusGlobal' , texte : true , valeur : '2000 - Ressources'},
        {reference : 'choixProcessusLie' , texte : true , valeur : '2300 - Ressources Humaines'},
        {reference : 'choixRedacteur' , texte : true , valeur : 'Joelle Fanomezantsoa , Nathalie Rasoanaivo ,Tsiory Rabenaivo ,Tinah Ramanitriniaina'},
        {reference : 'champChampLibre' , texte : false , valeur : '<span style="color:red">Champ libre<span>'}
    ];


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
            {renderContent()}
        </>
    );
}