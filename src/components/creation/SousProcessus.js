import { useRef, useState } from 'react';
import Base from '../support/Base';
import Description from '../support/Description';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import './css/document.css';
export default function SousProcessus(props){

    const {edition,valeurChamp} = props;

    const references = {
        // { ****  Ref Base début ****} //
        champMiseApplication : useRef(),
        champConfidentiel : useRef(),
    
        choixIso9001 : useRef(),
        choixIso14001 : useRef(),
        choixSecurite : useRef(),

        choixSiteIso9001 : useRef(),
        choixSiteIso14001 : useRef(),
        choixSiteSecurite : useRef(),

        choixProcessusGlobal : useRef(),
        choixProcessusLie : useRef(),

        champFinalite : useRef(),
        champDomaineApplication : useRef(),
        choixPilote : useRef(),
        champConditionContrainte : useRef(),

        champDonneeEntre : useRef(),
        champDonneeSortie : useRef(),

        champProcessusAppelant : useRef(),
        champProcessusAppele : useRef(),

        choixDiffusionEmail : useRef(),
        choixDiffusionPapier : useRef(),

        choixRedacteur : useRef(),
        choixVerificateur : useRef(),
        choixApprobateur : useRef(),

    // { ****  Ref description début **** } //

        champQuiRealise : useRef(),
        champQuiDecide : useRef(),
        champFaitQuoiDescription : useRef(),
        champLienMoyenDescription : useRef(),
        champCommentaire : useRef(),

    // { ****  Ref commentaire début **** } //
        champFaitQuoiCommentaire : useRef(),
        champLienMoyenCommentaire : useRef(),

    // { ****  Ref évaluation du processus début **** } //
        champPerformanceAttendues : useRef(),
        champPropositionSurveillance : useRef(),
        champIndicateurEventuel : useRef(),
        champEvenementFrequence : useRef(),
        champParticipant : useRef(),
        champPointAbordes : useRef(),
        champDocument : useRef()
    }   


    const getFormData = () =>{
        const dateMiseApplication = references.champMiseApplication.current.value;
        const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
            ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
        const iso9001 = references.choixIso9001.current.textContent;
        const iso14001 = references.choixIso14001.current.textContent;
        const securite = references.choixSecurite.current.textContent;
        const siteIso9001 = references.choixSiteIso9001.current.textContent;
        const siteIso14001 = references.choixSiteIso14001.current.textContent; 
        const siteSecurite = references.choixSiteSecurite.current.textContent;
        
        const processusGlobal = '';
        const processusLie = '';
        
        const finalite = references.champFinalite.current.innerHTML;
        const domaineApplication = references.champDomaineApplication.current.innerHTML;
        const piloteProcessus = '';
        const conditionContrainte = references.champConditionContrainte.current.innerHTML;

        const donneeEntree = references.champDonneeEntre.current.innerHTML;
        const donneeSortie = references.champDonneeSortie.current.innerHTML;
        const processusAppelant = '';
        const procesussAppele = '';

        const diffusionEmail = '';
        const diffusionPapier = '';

        const redacteur = '';
        const verificateur = '';
        const approbateur = '';

        const formData = [
            {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication},
            {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel},
            {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001},
            {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001},
            {reference : 'choixSecurite' , champ : 'securite' , valeur : securite},
            {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001},
            {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001},
            {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite},
            {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal},
            {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie},
            {reference : 'champFinalite' , champ : 'finalite' , valeur : finalite},
            {reference : 'champDomaineApplication' , champ : 'domaineApplication' , valeur : domaineApplication},
            {reference : 'choixPilote' , champ : 'piloteProcessus' , valeur : piloteProcessus},
            {reference : 'champConditionContrainte' , champ : 'conditionContrainte' , valeur : conditionContrainte},
            {reference : 'champDonneeEntre' , champ : 'donneeEntree' , valeur : donneeEntree},
            {reference : 'champDonneeSortie' , champ : 'donneeSortie' , valeur : donneeSortie},
            {reference : 'champDonneeSortie' , champ : 'donneeSortie' , valeur : donneeSortie},
            {reference : 'champProcessusAppelant' , champ : 'processusAppelant' , valeur : processusAppelant},
            {reference : 'champProcessusAppele' , champ : 'procesussAppele' , valeur : procesussAppele},
            {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail},
            {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier},
            {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur},
            {reference : 'choixVerificateur' , champ : 'verificateur' , valeur : verificateur},
            {reference : 'choixApprobateur' , champ : 'approbateur' , valeur : approbateur},
        ];

        return formData;
    }


    const saveBrouillon = () =>{
        console.log("enregistré ny sous-processus");
        const formData = getFormData();
        console.log(formData);
    };
    
    const sousProcessus = {type : "Sous-Processus" , idType : 2}
    
    return(
        <>
            {edition ? (
                <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>
            ) : (
                <></>
            )}
            <div className="list-paper" style={{marginTop:'7em'}}>
                {/* <Base type={sousProcessus.type} champMiseApplication = {champMiseApplication} champConfidentiel={champConfidentiel} ></Base> */}
                <Base type={sousProcessus.type} references={references} edition={edition} ></Base>
                <Description type={sousProcessus.type} references={references} edition={edition}></Description>
                <Support type={sousProcessus.type}></Support>
            </div>
        </>
    );
}