import Base from '../support/Base';
import Champ from '../support/Champ';
import Support from '../support/Support';
import './document.css';

export default function Enregistrement(){


    const enregistrement = {type: "Enregistrement" , idType: 4}
    return(
        <div className='list-paper' style={{marginTop:'7em'}}>

            <Base type={enregistrement.type}></Base>
            <Champ type={enregistrement.type}></Champ>
            <Support type={enregistrement.type}></Support>

        </div>
    );
}