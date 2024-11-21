import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Find() {
    const { reference } = useParams(); // Récupère le paramètre `reference`
    const navigate = useNavigate();

    useEffect(() => {
        if (reference) {
            navigate(`/document/applicable/4/${reference}/1`);
        }
    }, [reference, navigate]); // Déclenche la navigation seulement si `reference` est défini

    return null;
}