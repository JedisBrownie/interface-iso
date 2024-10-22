import { useRef, useState } from 'react';
import Base from '../support/Base';
import Description from '../support/Description';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import './css/document.css';
export default function SousProcessus(){



    const references = {
        // { ****  Ref Base début ****} //
        champMiseApplication : useRef(null),
        champConfidentiel : useRef(null),
    
        choixIso9001 : useRef(null),
        choixIso14001 : useRef(null),
        choixSecurite : useRef(null),

        choixSiteIso9001 : useRef(null),
        choixSiteIso14001 : useRef(null),
        choixSiteSecurite : useRef(null),

        choixProcessusGlobal : useRef(null),
        choixProcessusLie : useRef(null),

        champFinalite : useRef(null),
        champDomaineApplication : useRef(null),
        choixPilote : useRef(null),
        champConditionContrainte : useRef(null),

        champDonneeEntre : useRef(null),
        champDonneeSortie : useRef(null),

        champProcessusAppelant : useRef(null),
        champProcessusAppele : useRef(null),

        choixDiffusionEmail : useRef(null),
        choixDiffusionPapier : useRef(null),

        choixRedacteur : useRef(null),
        choixVerificateur : useRef(null),
        choixApprobateur : useRef(null),

    // { ****  Ref description début **** } //

        champQuiRealise : useRef(null),
        champQuiDecide : useRef(null),
        champFaitQuoiDescription : useRef(null),
        champLienMoyenDescription : useRef(null),
        champCommentaire : useRef(null),

    // { ****  Ref commentaire début **** } //
        champFaitQuoiCommentaire : useRef(null),
        champLienMoyenCommentaire : useRef(null),

    // { ****  Ref évaluation du processus début **** } //
        champPerformanceAttendues : useRef(null),
        champPropositionSurveillance : useRef(null),
        champIndicateurEventuel : useRef(null),
        champEvenementFrequence : useRef(null),
        champParticipant : useRef(null),
        champPointAbordes : useRef(null),
        champDocument : useRef(null)
    }   

    const champMiseApplication = useRef(null);
    const champConfidentiel = useRef(null);
   
    const saveBrouillon = () =>{
        console.log("enregistré ny sous-processus");

        const dateMiseApplication = references.champMiseApplication.current.value;
        const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value;
    

        const formData = {
            dateApplication : dateMiseApplication,
            confidentiel : confidentiel
        };

        console.log(formData);
    };
    
    const sousProcessus = {type : "Sous-Processus" , idType : 2}
    
    return(
        <>
            <Toolbar handleSaveBrouillon = {saveBrouillon} ></Toolbar>
            
            <div className="list-paper" style={{marginTop:'7em'}}>
                {/* <Base type={sousProcessus.type} champMiseApplication = {champMiseApplication} champConfidentiel={champConfidentiel} ></Base> */}
                <Base type={sousProcessus.type} references={references} ></Base>
                <Description type={sousProcessus.type}></Description>
                <Support type={sousProcessus.type}></Support>
            </div>
        </>
    );
}