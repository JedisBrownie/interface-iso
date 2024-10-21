import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
export default function Fiche(){
    
    const saveBrouillon = () =>{
        console.log("enregistré ny fiche d'instruction");
    }

    const fiche = {type:"Fiche d'instruction",idType: 3}
    
    return(
        <>
            <Toolbar saveBrouillon = {saveBrouillon}></Toolbar>
            <div className='list-paper' style={{marginTop:'7em'}}>
                <Base type={fiche.type}></Base>
                <Commentaire type={fiche.type}></Commentaire>
                <Support type={fiche.type}></Support>
            </div>
        </>
    );
}