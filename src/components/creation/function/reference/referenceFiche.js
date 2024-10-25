import { useRef } from "react";

export function useReferenceFiche () {

    return {
        // { ****  Ref feuille  1 Base  ****} //
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

        choixLecteur : useRef(),

        choixDiffusionEmail : useRef(null),
        choixDiffusionPapier : useRef(null),

        choixRedacteur : useRef(null),
        choixVerificateur : useRef(null),
        choixApprobateur : useRef(null),

    // { ****  Ref feuille 2 commentaire **** } //
        champFaitQuoiCommentaire : useRef(null),
        champLienMoyenCommentaire : useRef(null)
    }
    
} 