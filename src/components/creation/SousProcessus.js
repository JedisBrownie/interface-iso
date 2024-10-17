import Base from '../support/Base';
import Description from '../support/Description';
import Support from '../support/Support';
import './document.css';
export default function SousProcessus(){
    
    const sousProcessus = {type : "Sous-Processus" , idType : 2}
    return(
        <div className="list-paper" style={{marginTop:'7em'}}>
            <Base type={sousProcessus.type}></Base>
            <Description type={sousProcessus.type}></Description>
            <Support type={sousProcessus.type}></Support>
        </div>
    );
}