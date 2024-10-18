import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import React from 'react';

export default function ValeurModal(){

    
    return(
        <>
            <div className='valeur-champ-choice'>
                <span className='span-value'> Cru noir </span>
                <span className='span-arrow iso'><KeyboardArrowDownIcon fontSize='small'  style={{fontWeight:900}}/></span>
            </div>

            
        </>
    );
}