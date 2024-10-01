import React from 'react'
import './list.css';

export default function ListContentBrouillon(){
    return(
        <div className="content">
          
            <div className="ui grid container liste">
              <div className="row">
                
                <div className="three wide column" style={{display:'flex'}}>
                    <div className="key"></div>
                    <div>En cours de signature</div>
                </div>

                <div className="two wide column">
                    07/05/2024
                </div>

                <div className="two wide column">
                    Fiche d'instruction
                </div>

                <div className="six wide column">
                    Code de conduite des affaires , conflits d'intérêt et formation compliance
                </div>

                <div className="one wide column">
                  <span>6</span>
                  {/* {item.modification === true && <span style={{ paddingLeft: '10px', color: 'red', fontSize: '1.65em' , fontWeight:'bold' }}>*</span>} */}
                </div>

                <div className="two wide column">
                    1100,5515
                </div>

              </div>
            </div>
          
        </div>
    );
}