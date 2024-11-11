import './css/description.css';
export default function Description(props){
    const {type,references,edition} = props; 

    
    return(
        <>
            <div className="paper-two">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        {/* <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/> */}
                        <img src="/logo/secondaire-rouge.svg" alt="" style={{height:'7em'}}/>

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
                            <span className='information-list'>Page :</span><span className='information-value'> 2 / 3</span>
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

                <div className='description'>
                    <div className='titre'>Description</div>
                    
                    <div className='description-row'>
                        <div className='champ'> Qui réalise </div>
                        <div className='champ'> Qui décide </div>
                        <div className='champ'> Fait quoi </div>
                        <div className='champ'> Lien(s) / Moyen(s) </div>
                    </div>
                    
                    <div className='description-row' contentEditable="false">
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.champQuiRealise} contentEditable={edition}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.champQuiDecide} contentEditable={edition}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.champFaitQuoiDescription} contentEditable={edition}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.champLienMoyenDescription} contentEditable={edition}></div>
                    </div>

                </div>

            </div>
        </>
    );
}