import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Support from '../support/Support';

export default function Fiche(){
    const fiche = {type:"Fiche d'instruction",idType: 3}
    return(
        <div className='list-paper' style={{marginTop:'7em'}}>
            <Base type={fiche.type}></Base>
            <Commentaire type={fiche.type}></Commentaire>
            <Support type={fiche.type}></Support>
        </div>
    );
}