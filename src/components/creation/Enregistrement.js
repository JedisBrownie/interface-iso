import './enregistrement.css';
export default function Enregistrement(){
    return(
        <div className='list-paper' style={{marginTop:'7em',backgroundColor:''}}>
            {/* <div key={"key1"} className="div-content-editable" role="textbox" contentEditable='false' style={{width:'50%',height:'fit-content',outline:'1px solid grey',marginTop:'2em',marginLeft:'4em',borderRadius:'5px',fontFamily:'Segoe UI'}}>
                <div contentEditable='false' style={{background:'',width:'100%',height:'20px'}}>Tsy mety fafana</div>
                <div className="div-content-editable" contentEditable='true' style={{background:'',width:'50%',height:'fit-content',minHeight:'10em'}}></div>
            </div>
            <div key={"key2"}  role="textbox" contentEditable="true" className="div-content-editable" style={{width:'50%',height:'fit-content',minHeight:'30px',outline:'1px solid grey',marginTop:'2em',marginLeft:'4em',borderRadius:'5px',fontFamily:'Segoe UI'}} >

            </div> */}

            <div className="paper-one">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        <img src="./logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                    </div>
                    <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                        <div className="div-content-editable" role="textbox" contentEditable="true" style={{textAlign:'center',color:'red',lineHeight:'2%',}}>
                            <h1>Titre du document</h1> 
                        </div>
                        
                        <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                            <h3>Enregistrement</h3> 
                        </div>

                        <div >Ce document est en cours de rédaction !</div >
                    </div>
                    <div contentEditable='false' className='information' >
                        <div >Page  <span>: 1 / 4</span></div>
                        <div >Etat  <span>: Brouillon</span></div>
                        <div >N° Revision  <span>: </span></div>
                        <div >Date <span>: </span></div>
                    </div>
                </div>

            {/* début section 1 presentation */}
                <div className='presentation'>
                    <div className='title'>Présentation</div>
                    
                    <div className='presentation-grid'>
                        <div className='presentrow-one'>
                            <div className='champ'>Mise en application le</div>
                            <div className='valeur-champ'><input type='date'/></div>
                            
                            <div className='champ'>Pays</div>
                            <div className='valeur-champ'>Madagascar</div>
                        </div>

                        <div className='presentrow-two'>
                            <div className='champ'>&nbsp;</div>
                            <div className='valeur-champ'>&nbsp;</div>
                            
                            <div className='champ'>Confidentiel</div>
                            <div className='valeur-champ' style={{display:'flex'}}>
                                <input type='radio' name='confidentiel' value={'Oui'} id='oui'/><label for='oui'>Oui</label>
                                <input type='radio' name='confidentiel' style={{marginLeft:'20px'}} value={'Non'} id='non'/><label for='non'>Non</label>
                            </div>
                        </div>
                    </div>
                </div>
            {/* fin section 1 presentation */}

            {/* début section 2 liste iso */}
                <div className='liste-iso'>
                    <div className='title'>
                        <div></div>
                        <div style={{paddingLeft:'1em'}}>ISO 9001</div>
                        <div style={{paddingLeft:'1em'}}>ISO 14001</div>
                        <div style={{paddingLeft:'1em'}}>Sécurité</div>
                    </div>
                    <div className='activité'>
                        <div className='champ'>Activités</div>
                        <div className='valeur-champ'>&nbsp;</div>
                        <div className='valeur-champ'>&nbsp;</div>
                        <div className='valeur-champ'>&nbsp;</div>
                    </div>
                    <div className='site'>
                        <div className='champ'>Site</div>
                        <div className='valeur-champ'>&nbsp;</div>
                        <div className='valeur-champ'>&nbsp;</div>
                        <div className='valeur-champ'>&nbsp;</div>
                    </div>
                </div>
            {/* fin section 2 liste iso */}

            {/* début section 3 liste processus iso */}
                <div className='liste-processus'>
                    <div className='title'>
                        <div style={{paddingLeft:'1.5em'}}>Processus Global</div>
                        <div style={{paddingLeft:'1.5em'}}>Processus Lie</div>
                    </div>
                    <div className='processus'>
                        <div className='valeur-champ'>&nbsp;</div>
                        <div className='valeur-champ'>&nbsp;</div>
                    </div>
                </div>
            {/* fin section 3 liste processus iso */}

            </div>

        </div>
    );
}