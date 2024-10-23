import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Description from '../support/Description';
import Evaluation from '../support/Evaluation';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import { useRef } from 'react';

import './css/document.css';
export default function Processus(){

    const saveBrouillon = () =>{
        console.log("enregistré ny processus");
    }

    const processus = {type: "Processus" , idType: 1}

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

    
    return(
        <>
            <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>


            <div className='list-paper' style={{marginTop:'7em',backgroundColor:''}}>

                <Base type={processus.type} references={references}></Base>

                <Description type={processus.type}></Description>

                <Commentaire type={processus.type}></Commentaire>
                
                <Evaluation type={processus.type}></Evaluation>
                
                <Support type={processus.type}></Support>
                
            </div>
        </>
    );
}