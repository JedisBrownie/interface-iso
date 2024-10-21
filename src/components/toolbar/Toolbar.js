import './toolbar.css';
import React, { useEffect, useRef , useState } from 'react';
import interact from 'interactjs';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';
import SuperscriptRoundedIcon from '@mui/icons-material/SuperscriptRounded';
import SubscriptRoundedIcon from '@mui/icons-material/SubscriptRounded';
import FormatAlignCenterRoundedIcon from '@mui/icons-material/FormatAlignCenterRounded';
import FormatAlignJustifyRoundedIcon from '@mui/icons-material/FormatAlignJustifyRounded';
import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded';
import FormatAlignRightRoundedIcon from '@mui/icons-material/FormatAlignRightRounded';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Option from './Option';
import {createTable,execCommand,toggleButton,insertImage,addImageClickListener,toggleSuperSubScript,handleFontSizeChange,handleFontColorChange,handleFontChange} from './tools/function';

export default function Toolbar({ handleSaveBrouillon }){


    const fileInputRef = useRef(null);

 
    // ***  Image *** //
   
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            insertImage(file);
            addImageClickListener();
            fileInputRef.current.value = ''; 
        }
    };

    // 
    const brouillonMenuRef = useRef(null);

    const handleMenuClick = () => {
      console.log("Brouillon menu clicked!");
      console.log("option : " + handleSaveBrouillon);
    };
  
    useEffect(() => {
      // Add event listener once component is mounted
      const brouillonMenu = brouillonMenuRef.current;
      if (brouillonMenu) {
        brouillonMenu.addEventListener("click", handleMenuClick);
      }
  
      // Cleanup event listener when component unmounts
      return () => {
        if (brouillonMenu) {
          brouillonMenu.removeEventListener("click", handleMenuClick);
        }
      };
    }, []);

    return(
        <div className='header-editor' >
            <div className='choice' >
                <Option></Option>    
            </div>  
            
            <div style={{marginTop:'0em',columnGap:'10px',color:''}} className='toolbar-editor'>
                
                <div className='toolbar-text'>
                    <button className='toolbar-button' onClick={() => toggleButton("bold")} ><FormatBoldOutlinedIcon sx={{fontSize:17}} /> </button>    
                    <button className='toolbar-button' onClick={() => toggleButton("italic")}><FormatItalicOutlinedIcon sx={{fontSize:17}}/></button>
                    <button className='toolbar-button' onClick={() => toggleButton("underline")}><FormatUnderlinedOutlinedIcon sx={{fontSize:17}}/></button>
                    
                    <select className='font-selecor' onChange={handleFontChange} id="fontChoice">
                        <option value={'arial'}>Arial</option>
                        <option value={'serif'}>Avec Serif</option>
                        <option value={'monospace'}>Monospace</option>
                    </select>

                    <select className='font-size-selecor' onChange={handleFontSizeChange} id="fontSizeChoice">
                        <option value={'8px'}>8</option>
                        <option value={'10px'}>10</option>
                        <option value={'12px'}>12</option>
                        <option value={'14px'}>14</option>
                        <option value={'18px'}>18</option>
                        <option value={'20px'}>20</option>
                        <option value={'24px'}>24</option>
                    </select>

                    
                    <div className='font-color-picker'>
                        <button className='toolbar-button' onClick={() => document.getElementById('font-color-text').click()}><FormatColorTextOutlinedIcon sx={{fontSize:17}}/></button>
                        <input type='color' hidden id='font-color-text' onChange={handleFontColorChange}></input>
                    </div>

                    <div className='font-color-picker'>
                        <button className='toolbar-button' onClick={() => document.getElementById('font-color-background').click()}><FormatColorFillOutlinedIcon sx={{fontSize:17}} /></button>
                        <input type='color' hidden id='font-color-background'></input>
                    </div>
                </div>

                <div className='toolbar-paraph'>
                    <button className='toolbar-button' onClick={() => toggleButton("outdent") }><FormatIndentDecreaseOutlinedIcon sx={{fontSize:17}}/></button>
                    <button className='toolbar-button' onClick={() => toggleButton("indent") }><FormatIndentIncreaseOutlinedIcon sx={{fontSize:17}}/></button>
                </div>

                <div className='toolbar-assets'>
                    <button className='toolbar-button' onClick={() => createTable()}><TableChartOutlinedIcon sx={{fontSize:17}}/></button>

                    <label htmlFor="image-upload" className="custom-image-upload">
                        <InsertPhotoOutlinedIcon sx={{fontSize:17}} />
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ marginTop: '10px',color:'black'}} />
                </div>

                <div className='toolbar-formatage'>
                    <button className='toolbar-button' onClick={() => toggleButton("insertUnorderedList")}>
                        < FormatListBulletedOutlinedIcon sx={{fontSize:17}}/>
                    </button>
                    <button className='toolbar-button' onClick={() => toggleButton("insertOrderedList")}>
                        <FormatListNumberedOutlinedIcon sx={{fontSize:17}}/>
                    </button>
                    <button className='toolbar-button' onClick={() => toggleSuperSubScript("sup") }><SuperscriptRoundedIcon sx={{fontSize:17}}/></button>
                    <button className='toolbar-button' onClick={() => toggleSuperSubScript("sub") }><SubscriptRoundedIcon sx={{fontSize:17}}/></button>
                </div>

                <div className='align-content' >
                    <button className='toolbar-button' onClick={() => toggleButton("justifyCenter")}><FormatAlignCenterRoundedIcon sx={{fontSize:17}}/></button>
                    <button className='toolbar-button' onClick={() => toggleButton("justifyLeft")}><FormatAlignLeftRoundedIcon sx={{fontSize:17}}/></button>
                    <button className='toolbar-button' onClick={() => toggleButton("justifyRight")}><FormatAlignRightRoundedIcon sx={{fontSize:17}}/></button>
                    <button className='toolbar-button' onClick={() => toggleButton("justifyFull")}><FormatAlignJustifyRoundedIcon sx={{fontSize:17}}/></button>
                </div>

            </div>


            <div className='choice' style={{display:'none'}}>
                <Option handleSaveBrouillon={handleSaveBrouillon} brouillonMenuRef={brouillonMenuRef}></Option>    
                {console.log("toolbar : " + handleSaveBrouillon)}
                
            </div>  

            

            
        </div>
    );
}

