import { useRef } from "react";

export function useReferenceEnregistrement (){

    return {
        // { ****  Ref Base début ****} //
        champConfidentiel : useRef(null),

        choixIso9001 : useRef(null),
        choixIso14001 : useRef(null),
        choixSecurite : useRef(null),

        choixSiteIso9001 : useRef(null),
        choixSiteIso14001 : useRef(null),
        choixSiteSecurite : useRef(null),

        choixProcessusGlobal : useRef(null),
        choixProcessusLie : useRef(null),

        choixDiffusionEmail : useRef(null),
        choixDiffusionPapier : useRef(null),
        choixDiffusionEmailExterne : useRef(null),

        choixRedacteur : useRef(null),
        choixLecteur : useRef(null),

        // { ****  Ref champ libre début **** } //
        champChampLibre : useRef(null)
    }
}