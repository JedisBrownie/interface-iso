import ThreePointMenu from '../shared/ThreePointMenu';
import { useEffect } from 'react';
import './css/accordionArchive.css';
export default function ListDocument(){

    useEffect(() => {
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
          if (index % 2 === 1) {
            container.classList.add('alternate-color');
          }
        });
    }, []);


    return(
        <div style={{fontSize:'13px',marginTop:'1em'}}>
            <div className="ui grid container liste" style={{paddingLeft:'1em',cursor:'pointer',minHeight:'6em',backgroundColor:'#e4e4e4'}} >
            
                <div className="row fifteen wide column">
                    <div className='three wide column' style={{fontSize:'15px',fontWeight:'600'}}>
                        Ciments de bourbon
                    </div>


                    <div className="eight wide column" style={{display:'flex',alignItems:'center'}}>
                    {/* <div className="key">{item.confidentiel === true && <i className="key icon" style={{visibility:'visible',width:'2rem',color:'goldenrod'}}></i>}</div> */}
                    <div>Nom du document recherché ou du manuel intégré</div>
                    </div>
                    
                    <div className="two wide column">
                        <i className="check circle outline icon" style={{ visibility: 'visible', marginRight: '10px', color: 'limegreen', fontSize: '1.1em'}}></i>
                        Applicable
                        {/* {item.modification === true && <span style={{ paddingLeft: '10px', color: 'red', fontSize: '1.65em' , fontWeight:'bold' }}>*</span>} */}
                    </div>

                    <div className="two wide column">
                        10 / 12 / 2024
                    </div>


                    <div className="one wide column">
                        4
                    {/* {item.nombreRevision !== 0 && <span>{item.nombreRevision}</span>} */}
                    </div>
                </div>
              
                <div className="one wide column" style={{color:'black'}}>
                  {/* <ThreePointMenu modification={item.modification} reference={item.referenceDocument} idDocument = {item.idDocument}></ThreePointMenu> */}
                </div>

            </div>

            <div className="ui grid container liste" style={{paddingLeft:'1em',cursor:'pointer',minHeight:'6em'}}>
                
                <div className="row fifteen wide column">
                    <div className='three wide column' style={{fontSize:'15px',fontWeight:'600'}}>
                        Holcim Réunion
                    </div>


                    <div className="eight wide column" style={{display:'flex',alignItems:'center'}}>
                    {/* <div className="key">{item.confidentiel === true && <i className="key icon" style={{visibility:'visible',width:'2rem',color:'goldenrod'}}></i>}</div> */}
                    <div>Nom du document recherché ou du manuel intégré</div>
                    </div>
                    
                    <div className="two wide column">
                        <i className="check circle outline icon" style={{ visibility: 'visible', marginRight: '10px', color: 'limegreen', fontSize: '1.1em'}}></i>
                        Applicable
                        {/* {item.modification === true && <span style={{ paddingLeft: '10px', color: 'red', fontSize: '1.65em' , fontWeight:'bold' }}>*</span>} */}
                    </div>

                    <div className="two wide column">
                        10 / 12 / 2024
                    </div>


                    <div className="one wide column">
                        4
                    {/* {item.nombreRevision !== 0 && <span>{item.nombreRevision}</span>} */}
                    </div>
                </div>
            
                <div className="one wide column" style={{color:'black'}}>
                {/* <ThreePointMenu modification={item.modification} reference={item.referenceDocument} idDocument = {item.idDocument}></ThreePointMenu> */}
                </div>

            </div>

            
        </div>
    );
}