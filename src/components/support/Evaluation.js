import './css/evaluation.css';
import { useEffect } from 'react';

export default function Evaluation(props){
    const {type,references,edition,titre} = props; 

    useEffect(() => {
        if (references.champTitre.current && edition) {
            references.champTitre.current.innerHTML = titre; 
        }
    }, [titre]);

    return(
        <>
            <div className="paper-four">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>

                    </div>
                    <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                        <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                        </div>
                        
                        <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                            <h3>{type}</h3> 
                        </div>

                        <div >Ce document est en cours de rédaction !</div >
                    </div>
                    
                    <div contentEditable='false' className='information'>
                        <div>
                            <span className='information-list'>Page :</span><span className='information-value'> 1 / 4</span>
                        </div>

                        <div > 
                            <span className='information-list'>Etat :</span><span className='information-value'> Brouillon</span>
                        </div>
                        
                        <div > 
                            <span className='information-list'>N° Révision :</span>
                            <span className='information-value'></span>
                        </div>

                        <div>
                            <span className='information-list'>Date : </span>
                            <span className='information-value'></span>
                        </div>
                    </div>

                </div>

                <div className='evaluation'>
                    <div className='head-title'>Evaluation du processus</div>

                    <div className='title-one'>Performance du processus</div>
                    <div className='performance-row'>
                        <div className='champ'>Performances attendues</div>
                        <div className='champ'>Proposition de surveillance</div>
                        <div className='champ'>Indicateur éventuels</div>
                    </div>
                    <div className='performance-row'>
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.champPerformanceAttendues} contentEditable={edition} style={{lineHeight:'18px'}}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.champPropositionSurveillance} contentEditable={edition} style={{lineHeight:'18px'}}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.champIndicateurEventuel} contentEditable={edition} style={{lineHeight:'18px'}}></div>
                    </div>

                    <div className='title-two'>Surveillance et amélioration du processus</div>
                        <div className='surveillance-row'>
                            <div className='champ'>Evenement / Fréquence</div>
                            <div className='champ'>Participants</div>
                            <div className='champ'>Points abordés</div>
                            <div className='champ'>Documents</div>
                        </div>
                        <div className='surveillance-row'>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champEvenementFrequence} contentEditable={edition} style={{lineHeight:'18px'}}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champParticipant} contentEditable={edition} style={{lineHeight:'18px'}}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champPointAbordes} contentEditable={edition} style={{lineHeight:'18px'}}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champDocument} contentEditable={edition} style={{lineHeight:'18px'}}></div>
                        </div>
                </div>

            </div>
        </>
    );
}