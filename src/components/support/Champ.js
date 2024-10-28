import './css/champ.css';
export default function Champ(props){

    const {type,references,edition,titre} = props;
    return(
        <>  
            <div className="paper-six">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                    </div>
                    <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                        <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                            <h1>{titre}</h1> 
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

                <div className="contenu-doc">
                    <div className='div-content-editable contenu' role='textbox' suppressContentEditableWarning={true} contentEditable={edition} ref={references.champChampLibre} data-text = "Rédiger le contenu de votre document ici">
                        
                    </div>
                </div>

            </div>
        </>
    ); 
}