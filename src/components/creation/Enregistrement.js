import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Description from '../support/Description';
import Evaluation from '../support/Evaluation';
import Support from '../support/Support';
import './enregistrement.css';
export default function Enregistrement(){
    return(
        <div className='list-paper' style={{marginTop:'7em',backgroundColor:''}}>

            <Base></Base>

            <Description></Description>

            <Commentaire></Commentaire>
            
            <Evaluation></Evaluation>
            
            <Support></Support>
            
        </div>
    );
}