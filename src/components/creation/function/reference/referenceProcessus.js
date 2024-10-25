import { useRef } from "react";

export function useReferenceProcessus () {
    return {
        // { ****  Ref feuille 1 ****} //
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

    // { ****  Ref feuille 2 **** } //

        champQuiRealise : useRef(null),
        champQuiDecide : useRef(null),
        champFaitQuoiDescription : useRef(null),
        champLienMoyenDescription : useRef(null),

    // { ****  Ref feuille 3 **** } //
        champFaitQuoiCommentaire : useRef(null),
        champLienMoyenCommentaire : useRef(null),

    // { ****  Ref feuille 4 **** } //
        champPerformanceAttendues : useRef(null),
        champPropositionSurveillance : useRef(null),
        champIndicateurEventuel : useRef(null),
        champEvenementFrequence : useRef(null),
        champParticipant : useRef(null),
        champPointAbordes : useRef(null),
        champDocument : useRef(null)
    
    }
}   