import { useEffect, useState } from "react";
import Enregistrement from "../../components/creation/Enregistrement";
import { useNavigate, useParams } from "react-router-dom";
import Processus from "../../components/creation/Processus";
import SousProcessus from "../../components/creation/SousProcessus";
import Fiche from "../../components/creation/Fiche";
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Navigateur from "../../components/creation/Navigateur";




export default function Edition(){

    const [content,setContent] = useState("");
    const { type } = useParams();
    const [typeId, setTypeId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const typeMapping = {
            'processus': 1,
            'sous-processus': 2,
            'fiche': 3,
            'enregistrement': 4,
            'navigateur': 5,
        };
        setTypeId(typeMapping[type] || null);
    }, [type]);

    const handleBackMenu = () =>{
        navigate('/home');
    }

    const edition = true;

    const renderContent = () =>{
        switch(type) {
            case 'processus':
                return <Processus edition={edition} typeId={typeId} ></Processus>
            case 'enregistrement':
                return <Enregistrement edition={edition} typeId={typeId} ></Enregistrement>
            case 'fiche':
                return <Fiche edition={edition} typeId={typeId} ></Fiche>
            case 'sous-processus':
                return <SousProcessus edition={edition} typeId={typeId} ></SousProcessus>
            case 'navigateur':
                return <Navigateur edition={edition} typeId={typeId} ></Navigateur>
        }
    }

    console.error = (function() {
        var error = console.error
    
        return function(exception) {
            if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
                error.apply(console, arguments)
            }
        }
    })()

    return(
        <>
            {renderContent()}
        </>
    );
}