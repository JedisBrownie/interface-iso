import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Description from '../support/Description';
import Evaluation from '../support/Evaluation';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import './css/document.css';
export default function Processus(){

    const saveBrouillon = () =>{
        console.log("enregistré ny processus");
    }

    const processus = {type: "Processus" , idType: 1}
    
    return(
        <>
            <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>


            <div className='list-paper' style={{marginTop:'7em',backgroundColor:''}}>

                <Base type={processus.type} ></Base>

                <Description type={processus.type}></Description>

                <Commentaire type={processus.type}></Commentaire>
                
                <Evaluation type={processus.type}></Evaluation>
                
                <Support type={processus.type}></Support>
                
            </div>
        </>
    );
}