import React, { useState } from 'react';
import './processus.css';
export default function Processus(){
    
    return (
        <div contentEditable = {false}  suppressContentEditableWarning={true}> 
            <div className='title-test' contentEditable={false} suppressContentEditableWarning={true}>
                <span  contentEditable={false} className='data-no-format' data-no-delete  suppressContentEditableWarning={true}>Logo eto</span>  
                <h1   contentEditable={true}  suppressContentEditableWarning={true}>Hello Processus</h1>
                <h1  contentEditable={false} className='data-no-format' data-no-delete  suppressContentEditableWarning={true}>Nombre de page eto</h1>
            </div>
            <div  className='manoratra'  contentEditable={true}  suppressContentEditableWarning={true}>
            </div>
        </div>

      );
}