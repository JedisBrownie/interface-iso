import Base from '../support/Base';
import Description from '../support/Description';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import './css/document.css';
export default function SousProcessus(){

    const saveBrouillon = () =>{
        console.log("enregistré ny sous-processus");
    }



    const sousProcessus = {type : "Sous-Processus" , idType : 2}
    return(
        <>
            <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>
            
            <div className="list-paper" style={{marginTop:'7em'}}>
                <Base type={sousProcessus.type}></Base>
                <Description type={sousProcessus.type}></Description>
                <Support type={sousProcessus.type}></Support>
            </div>
        </>
    );
}