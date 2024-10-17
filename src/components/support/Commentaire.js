import './commentaire.css';
export default function Commentaire(props){

    const {type} = props;
    return(
        <>
            <div className="paper-three">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                    </div>
                    <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                        <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                            <h1>Titre du document</h1> 
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
                            <span className='information-value'>2</span>
                        </div>

                        <div>
                            <span className='information-list'>Date : </span>
                            <span className='information-value'>23 / 06 / 2024</span>
                        </div>
                    </div>
                </div>

                <div className='commentaire' contentEditable='false'>
                    {type === "Fiche d'instruction" ? (
                        <div className='titre'>Description</div>
                    ) : (
                        <div className='titre'>Commentaire</div>
                    )}
                    

                    <div className='commentaire-row'>
                        <div className='champ' style={{textAlign:'center'}}> Faits quoi </div>
                        <div className='champ' style={{textAlign:'center'}}> Lien(s) / Moyen(s) </div>
                    </div>
                    
                    <div className='commentaire-row' contentEditable="false">
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                    </div>

                </div>
            </div>
        </>
    );
}