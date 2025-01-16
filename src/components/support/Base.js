import './css/base.css';
import ValeurModal from './ValeurModal';
import { useEffect, useState } from 'react';
import ProcessusModal from './ProcessusModal';
import UserModal from './UserModal';
export default function Base(props){

    const {type , references , edition , valeurChamp , changeTitle} = props;

    const [isConfidentiel , setIsConfidentiel] = useState(false);

    const handleConfidentielChoice = (value) =>{
        setIsConfidentiel(value);
    }

    const renderLecteurComponent = (height) =>{
        return(
            <>
                <div className='diffusion-row'>
                    <div className='champ' style={{minHeight:height}}>Lecteurs</div>
                    <div className='valeur-champ' ref={references.choixLecteur}></div>
                </div>
            </>
        );
    }
    
    useEffect(() => {
        if (edition && valeurChamp ) {
            
            valeurChamp.forEach(({ reference, texte, valeur }) => {
                const champRef = references[reference]?.current;
                console.log("ref : " + champRef);

                if (champRef) {
                    
                    if (texte) {
                        // Si c'est du texte simple
                        champRef.textContent = valeur;
                    } 
                    else {
                        // Si c'est du HTML
                        champRef.innerHTML = valeur;
                    }
                }else{
                    console.log("null : " + champRef);
                }

                if (reference === 'champTitre') {
                    changeTitle({ target: { innerHTML: valeur } });
                }
            });
        }
    }, [edition, valeurChamp]);


    return(
        <>
            <div className="paper-one">
                    <div className="entete" contentEditable='false'>
                        <div contentEditable='false' className="logo">
                            <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                            {/* <img src="/logo/secondaire-rouge.svg" alt="" style={{height:'7em'}}/> */}
                        </div>
                        <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                            <div className="div-content-editable" role="textbox" onInput={(e) => changeTitle(e)} contentEditable={edition} style={{textAlign:'center',color:'red',height:'fit-content'}}>
                                <h1 ref={references.champTitre}>Titre du document</h1> 
                            </div>
                            
                            <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                                <h3>{type}</h3> 
                            </div>

                            <div >Ce document est en cours de rédaction !</div >
                        </div>
                        <div contentEditable='false' className='information'>
                            <div>
                                <span className='information-list'>Page :</span><span className='information-value'> 1 / 2</span>
                            </div>

                            <div > 
                                <span className='information-list'>Etat :</span><span className='information-value'> Brouillon</span>
                            </div>
                            
                            <div > 
                                <span className='information-list'>N° Révision : </span><span className='information-value'></span>
                                <span className='information-value'></span>
                            </div>

                            <div>
                                <span className='information-list'>Date : </span><span className='information-value'></span>
                                <span className='information-value'></span>
                            </div>
                        </div>
                    </div>

                {/* début section 1 presentation */}
                    <div className='presentation'>
                        <div className='title'>Présentation</div>
                        
                        <div className='presentation-grid'>
                            <div className='presentrow-one'>
                                {edition ? (
                                    <>
                                        {type === 'Enregistrement' || type === 'Navigateur' ? (
                                            <>
                                                <div className='champ'></div>
                                                {/* <div className='valeur-champ' ref={references.champMiseApplication}></div> */}
                                                <div className='valeur-champ'><input type='date' ref={references.champMiseApplication} hidden /></div>
                                            </>
                                        ) : (
                                            <>
                                                <div className='champ'>Mise en application le</div>
                                                <div className='valeur-champ'><input type='date' ref={references.champMiseApplication}/></div>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <>
                                      <div className='champ'>Mise en application le</div>
                                      <div className='valeur-champ' ref={references.champMiseApplication}></div>  
                                    </>
                                    
                                )}
                                

                                
                                <div className='champ'>Pays</div>
                                <div className='valeur-champ'>Madagascar</div>
                            </div>

                            <div className='presentrow-two'>
                                <div className='champ'></div>
                                <div className='valeur-champ'></div>
                                
                                <div className='champ'>Confidentiel</div>
                                <div className='valeur-champ' ref={references.champConfidentiel} style={{paddingTop:'0.2em',display:'flex'}}>
                                    
                                    {edition ? (
                                        <>
                                            <div style={{display:'flex',alignItems:'center'}} onClick={() => handleConfidentielChoice(true)}>
                                                <input type='radio' name='confidentiel' value={'Oui'} id='oui'/>
                                                <label htmlFor='oui'>Oui</label>
                                            </div>

                                            <div style={{display:'flex',alignItems:'center',marginLeft:'20px'}} onClick={() => handleConfidentielChoice(false)}>
                                                <input type='radio' name='confidentiel' value={'Non'} id='non'/>
                                                <label htmlFor='non'>Non</label>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            Oui \ Non
                                        </>
                                    )}
                                    
                                    
                                </div>
                            </div>

                            {/* <div className='presentrow-three' style={{display:'grid',gridTemplateColumns:'25% 75%'}}>
                                <div className='champ'>Lecteurs</div>
                                <div className='valeur-champ'></div>
                            </div> */}
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

                            <ValeurModal type="activite" reference={references.choixIso9001} edition={edition} ></ValeurModal>
                            
                            <ValeurModal type="activite" reference={references.choixIso14001} edition={edition} ></ValeurModal>

                            <ValeurModal type="activite" reference={references.choixSecurite} edition={edition} ></ValeurModal>       
                        </div>

                        

                        <div className='site'>
                            <div className='champ'>Site</div>

                            <ValeurModal type="site" reference={references.choixSiteIso9001} edition={edition}></ValeurModal>

                            <ValeurModal type="site" reference={references.choixSiteIso14001}edition={edition}></ValeurModal>

                            <ValeurModal type="site" reference={references.choixSiteSecurite} edition={edition}></ValeurModal>
                        </div> 
                    </div>
                {/* fin section 2 liste iso */}

                {/* début section 3 liste processus iso */}
                    
                    <ProcessusModal reference={references} edition={edition} type1="Global" type2="Lie" ></ProcessusModal>
                    
                {/* fin section 3 liste processus iso */}
                
                {/* début section 4 finalité */}
                {type === 'Enregistrement' || type === 'Navigateur' ?(
                     <></>
                ) : (
                    <div className='finalite' contentEditable="false">
                        <div className='finalite-row'>
                            <div className='champ'>Finalités</div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champFinalite} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>

                        <div className='finalite-row'>
                            <div className='champ'>Domaine d'application</div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champDomaineApplication} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>
                        
                        {type === "Fiche d'instruction" ?(
                            <></>
                        ) : (
                            <div className='finalite-row'>
                                <div className='champ'>Pilote du processus</div>
                                <div className='div-content-editable valeur-champ' role="textbox" ref={references.choixPilote} contentEditable={edition}></div>
                            </div>
                        )}
                        

                        <div className='finalite-row'>
                            <div className='champ'>Condition ou contrainte</div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champConditionContrainte} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>
                    </div>
                )

                }
                {/* fin section 4 finalité */}

                {/* début section 5 données */}
                {type === 'Enregistrement' || type === 'Navigateur' || type === "Fiche d'instruction" ? (
                    <></>
                ) : (
                    <div className='donnees' contentEditable="false">
                        <div className='donnees-titre'>
                            <div style={{paddingLeft:'1.5em'}}>Données d'entrée</div>
                            <div style={{paddingLeft:'1.5em'}}>Données de sortie</div>
                        </div>

                        <div className='donnees-valeur'>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champDonneeEntre} suppressContentEditableWarning={true} contentEditable={edition}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champDonneeSortie} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>
                    </div>
                )}

                {/* fin section 5 données */}

                {/* début section 6 processus appel*/}
                { type === 'Enregistrement' || type === 'Navigateur' || type === "Fiche d'instruction" ? (
                    <></>
                ) : ( 
                    <div className='processus-appel'>
                        <ProcessusModal reference={references} edition={edition} type1="Appelants" type2="Appelés" ></ProcessusModal>
                    </div>
                )}
                {/* fin section 6 processus appel*/}
                
                {/* debut intersection pour Rédacteur */}
                { type === 'Enregistrement' || type === 'Navigateur' ? (
                    <div className='redacteur-row' contentEditable='false'>
                        <div className='champ'>Rédacteur</div>
                        <UserModal reference={references.choixRedacteur} edition={edition} comiteDirection={false} redacteur={true} edit={"Aina Razafindrakoto"}></UserModal>
                    </div>
                ) : (
                    <></>
                )} 
                

                {/* fin intersection pour Rédacteur */}


                {/* début section 7 diffusion */}
                    <div className='diffusion'>
                        <div className='diffusion-titre'>Diffusion</div>
                        
                        {type === 'Enregistrement' || type === 'Navigateur' ?(
                            <>
                                {/* {isConfidentiel && 
                                    renderLecteurComponent('6em')
                                } */}
                                <div className='diffusion-row'>
                                    <div className='champ' style={{minHeight:'6em'}}>Par email</div>
                                    <UserModal reference={references.choixDiffusionEmail} edition={edition} comiteDirection={false} ></UserModal>
                                </div>

                                <div className='diffusion-row'>
                                    <div className='champ' style={{minHeight:'6em'}}>Adresse email externe</div>
                                    <UserModal reference={references.choixDiffusionEmailExterne} edition={edition}></UserModal>
                                    {/* <div className='valeur-champ' role="textbox" contentEditable={edition} ref={references.choixDiffusionEmailExterne} ></div> */}
                                </div>

                                <div className='diffusion-row'>
                                    <div className='champ'style={{minHeight:'5em'}}>Par papier</div>
                                    <div className='div-content-editable valeur-champ' role="textbox" ref={references.choixDiffusionPapier} contentEditable={edition}></div>
                                    {/* <UserModal reference={references.choixDiffusionPapier} edition={edition} comiteDirection={false} ></UserModal> */}
                                    {/* <div className='valeur-champ' ref={references.choixDiffusionPapier}></div> */}
                                </div>
                            </>
                        ) : (
                            <>
                                {(isConfidentiel && type !== 'Processus') &&
                                    renderLecteurComponent('2em')
                                }
                                <div className='diffusion-row'>
                                    <div className='champ' >Par email</div>
                                    <UserModal reference={references.choixDiffusionEmail} edition={edition} comiteDirection={false} ></UserModal>

                                    {/* <div className='valeur-champ' ref={references.choixDiffusionEmail}></div> */}
                                </div>

                                <div className='diffusion-row'>
                                    <div className='champ' >Par papier</div>
                                    <div className='div-content-editable valeur-champ' role="textbox" ref={references.choixDiffusionPapier} contentEditable={edition}></div>

                                    {/* <div className='valeur-champ'></div> */}
                                </div>
                            </>
                        )}
                        
                    </div>
                {/* fin section 7 diffusion */}

                {/* début section 8 workflow */}
                    { type === 'Enregistrement' || type === 'Navigateur' ? (
                        <></>
                    ) : ( 
                        <div className='workflow'>
                            <div className='workflow-titre'>Circuit de validation</div>

                            <div className='workflow-row'>
                                <div className='champ'>Rédacteur</div>
                                <UserModal reference={references.choixRedacteur} edition={edition} comiteDirection={false} redacteur={true} edit={"Aina Razafindrakoto"}></UserModal>
                                <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}} ref={references.statutRedacteur}></div>
                            </div>

                            <div className='workflow-row'>
                                <div className='champ'>Vérificateur</div>
                                <UserModal reference={references.choixVerificateur} edition={edition} edit={"Aina Andriamahenina"}   comiteDirection={false}></UserModal>
                                <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}} ref={references.statutVerificateur}></div>
                            </div>

                            <div className='workflow-row'>
                                <div className='champ'>Approbateur</div>
                                <UserModal reference={references.choixApprobateur} edition={edition} edit={"Teddy Rakotoarison"} comiteDirection={true}></UserModal>
                                <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}} ref={references.statutApprobateur}></div>
                            </div>
                        </div>
                    )}
                {/* fin section 8 workflow */}
            </div>
        </>
    );
}

