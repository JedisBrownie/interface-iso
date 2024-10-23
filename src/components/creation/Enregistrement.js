import React, { lazy, Suspense } from 'react';
import './css/document.css';
import { useRef } from 'react';

const Base = lazy(() => import('../support/Base'));
const Champ = lazy(() => import('../support/Champ'));
const Support = lazy(() => import('../support/Support'));
const Toolbar = lazy(() => import('../toolbar/Toolbar'))

export default function Enregistrement(){

    function saveBrouillon(){
        console.log("enregistré ny enregistrement");
    }

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

    const enregistrement = {type: "Enregistrement" , idType: 4}
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>
            <div className='list-paper' style={{marginTop:'7em'}}>

                <Base type={enregistrement.type} references={references}></Base>
                <Champ type={enregistrement.type}></Champ>
                <Support type={enregistrement.type}></Support>

            </div>
        </Suspense>
    );
}