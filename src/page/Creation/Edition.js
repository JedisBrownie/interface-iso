import { useState } from "react";
import Enregistrement from "../../components/creation/Enregistrement";
import { useNavigate, useParams } from "react-router-dom";
import Processus from "../../components/creation/Processus";
import SousProcessus from "../../components/creation/SousProcessus";
import Fiche from "../../components/creation/Fiche";
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Edition(){

    const [content,setContent] = useState("");
    
    const {type} = useParams();

    const navigate = useNavigate();

    const handleBackMenu = () =>{
        navigate('/home');
    }

    const edition = true;

    const renderContent = () =>{
        switch(type) {
            case 'processus':
                return <Processus edition={edition}></Processus>
            case 'enregistrement':
                return <Enregistrement edition={edition} ></Enregistrement>
            case 'fiche':
                return <Fiche edition={edition}></Fiche>
            case 'sous-processus':
                return <SousProcessus edition={edition}></SousProcessus>
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
            
            <div style={{ display: 'flex', position: 'fixed', alignItems: 'center' , width:'100%', justifyContent:'flex-end' ,bottom: '2em' , paddingRight:'4em' }} onClick={handleBackMenu}>
                <Fab variant="extended" size="medium" color="primary" style={{borderRadius:'1.2em',width:'9em',height:'3.5em',textTransform:'none',backgroundColor:'rgb(113, 113, 113)',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                    <ArrowBackIosIcon sx={{ mr: 1 }} style={{fontSize:'13px',fontWeight:'bold'}}/>
                    <span style={{fontSize:'13px',fontFamily:'Lato'}}>Retour</span> 
                </Fab>
            </div>
        </>
    );
}