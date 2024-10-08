import React, { useState } from 'react';
import './processus.css';
export default function Processus(){
    
    return (
        <div contentEditable = {false}  suppressContentEditableWarning={true}> 
            <div className='title-test' contentEditable={false} suppressContentEditableWarning={true}>
                <span contentEditable={false} className="data-no-delete" data-no-delete  suppressContentEditableWarning={true}>Logo eto</span>  
                <h1 contentEditable={true}  suppressContentEditableWarning={true} role='textbox'>Hello Processus</h1>
                <h1 contentEditable={false} className="data-no-delete" data-no-delete  suppressContentEditableWarning={true}>Nombre de page eto</h1>
            </div>
            <div  className='manoratra'  contentEditable={false}  suppressContentEditableWarning={true}>
                <select>
                    <option value={'Prop1'}>Option 1</option>
                    <option value={'Prop2'}>Option 2</option>
                    <option value={'Prop3'}>Option 3</option>
                </select>
            </div>
        </div>

      );
}