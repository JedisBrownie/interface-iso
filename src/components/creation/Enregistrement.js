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
                            <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="true" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                                <h1>Titre du document</h1> 
                            </div>
                            
                            <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                                <h3>Processus</h3> 
                            </div>

                            <div >Ce document est en cours de rédaction !</div >
                        </div>
                        <div contentEditable='false' className='information'>
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
                                <div className='valeur-champ' style={{paddingTop:'0.2em',display:'flex'}}>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <input type='radio' name='confidentiel' value={'Oui'} id='oui'/>
                                        <label for='oui'>Oui</label>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
                                        <input type='radio' name='confidentiel' value={'Non'} id='non'/>
                                        <label for='non'>Non</label>
                                    </div>
                                    
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
                
                {/* début section 4 finalité */}
                    <div className='finalite' contentEditable="false">
                        <div className='finalite-row'>
                            <div className='champ'>Finalités</div>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                        </div>

                        <div className='finalite-row'>
                            <div className='champ'>Domaine d'application</div>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                        </div>
                        
                        <div className='finalite-row'>
                            <div className='champ'>Pilote du processus</div>
                            <div className='div-content-editable valeur-champ' role="textbox"></div>
                        </div>

                        <div className='finalite-row'>
                            <div className='champ'>Condition ou contrainte</div>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                        </div>

                    </div>
                {/* fin section 4 finalité */}

                {/* début section 5 données */}
                    <div className='donnees' contentEditable="false">
                        <div className='donnees-titre'>
                            <div style={{paddingLeft:'1.5em'}}>Données d'entrée</div>
                            <div style={{paddingLeft:'1.5em'}}>Données de sortie</div>
                        </div>

                        <div className='donnees-valeur'>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                        </div>
                    </div>

                {/* fin section 5 données */}

                {/* début section 6 processus appel*/}
                    <div className='processus-appel'>
                        <div className='titre'>
                            <div style={{paddingLeft:'1.5em'}}>Processus Appelant</div>
                            <div style={{paddingLeft:'1.5em'}}>Processus Appelé</div>
                        </div>
                        <div className='valeur'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                {/* fin section 6 processus appel*/}

                {/* début section 7 diffusion */}
                    <div className='diffusion'>
                        <div className='diffusion-titre'>Diffusion</div>

                        <div className='diffusion-row'>
                            <div className='champ'>Par email</div>
                            <div className='valeur-champ'></div>
                        </div>

                        <div className='diffusion-row'>
                            <div className='champ'>Par papier</div>
                            <div className='valeur-champ'></div>
                        </div>
                    </div>
                {/* fin section 7 diffusion */}

                {/* début section 8 workflow */}
                    <div className='workflow'>
                        <div className='workflow-titre'>Circuit de validation</div>

                        <div className='workflow-row'>
                            <div className='champ'>Rédacteur</div>
                            <div className='valeur-champ'></div>
                            <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}}>En cours de rédaction...</div>
                        </div>

                        <div className='workflow-row'>
                            <div className='champ'>Vérificateur</div>
                            <div className='valeur-champ'></div>
                            <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}}>En attente</div>
                        </div>

                        <div className='workflow-row'>
                            <div className='champ'>Approbateur</div>
                            <div className='valeur-champ'></div>
                            <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}}>En attente</div>
                        </div>
                    </div>
                {/* fin section 8 workflow */}
            </div>


            {/*#### { paper-two debut } ####*/}

            <div className="paper-two">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        <img src="./logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                    </div>
                    <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                        <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                            <h1>Titre du document</h1> 
                        </div>
                        
                        <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                            <h3>Processus</h3> 
                        </div>

                        <div >Ce document est en cours de rédaction !</div >
                    </div>
                    <div contentEditable='false' className='information'>
                        <div >Page  <span>: 2 / 4</span></div>
                        <div >Etat  <span>: Brouillon</span></div>
                        <div >N° Revision  <span>: </span></div>
                        <div >Date <span>: </span></div>
                    </div>
                </div>

                <div className='description'>
                    <div className='titre'>Description</div>
                    
                    <div className='description-row'>
                        <div className='champ'> Qui réalise </div>
                        <div className='champ'> Qui décide </div>
                        <div className='champ'> Faits quoi </div>
                        <div className='champ'> Lien(s) / Moyen(s) </div>
                    </div>
                    
                    <div className='description-row' contentEditable="false">
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true"></div>
                    </div>
                </div>
            </div>

            {/*#### { paper-two fin } ####*/}

            {/*#### { paper-three debut } ####*/}
            <div className="paper-three">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        <img src="./logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                    </div>
                    <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                        <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                            <h1>Titre du document</h1> 
                        </div>
                        
                        <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                            <h3>Processus</h3> 
                        </div>

                        <div >Ce document est en cours de rédaction !</div >
                    </div>
                    <div contentEditable='false' className='information'>
                        <div >Page  <span>: 3 / 4</span></div>
                        <div >Etat  <span>: Brouillon</span></div>
                        <div >N° Revision  <span>: </span></div>
                        <div >Date <span>: </span></div>
                    </div>
                </div>

                <div className='commentaire' contentEditable='false'>
                    <div className='titre'>Commentaire</div>

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
            {/*#### { paper-three fin } ####*/}
            
            {/*#### { paper-four debut } ####*/}
            <div className="paper-four">
                <div className="entete" contentEditable='false'>
                    <div contentEditable='false' className="logo">
                        <img src="./logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                    </div>
                    <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                        <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                            <h1>Titre du document</h1> 
                        </div>
                        
                        <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                            <h3>Processus</h3> 
                        </div>

                        <div >Ce document est en cours de rédaction !</div >
                    </div>
                    <div contentEditable='false' className='information'>
                        <div >Page  <span>: 4 / 4</span></div>
                        <div >Etat  <span>: Brouillon</span></div>
                        <div >N° Revision  <span>: </span></div>
                        <div >Date <span>: </span></div>
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
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                        <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                    </div>

                    <div className='title-two'>Surveillance et amélioration du processus</div>
                        <div className='surveillance-row'>
                            <div className='champ'>Evenement / Fréquence</div>
                            <div className='champ'>Participants</div>
                            <div className='champ'>Points abordés</div>
                            <div className='champ'>Documents</div>
                        </div>
                        <div className='surveillance-row'>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" contentEditable="true" style={{lineHeight:'18px'}}></div>
                        </div>
                </div>

            </div>

            {/*#### { paper-four fin } ####*/}
        </div>
    );
}