import './toolbar.css';
import { useEffect, useRef , useState } from 'react';
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

export default function Toolbar(){

    const fileInputRef = useRef(null);

    const execCommand = (command,arg) =>{
        document.execCommand(command,false,arg);
    }

    const toggleButton = (command) =>{
        document.execCommand(command,false,null);
    };

// ***  Table *** //

    const createTable = () => {
        const tableRows = 3;
        const tableCols = 3;

        const table = document.createElement('table');
        table.border = '1px solid black';
        table.style.width = '100%';
        table.style.minHeight = '4em';

        for (let i = 0; i < tableRows; i++) {
          const row = document.createElement('tr');
          for (let j = 0; j < tableCols; j++) {
            const cell = document.createElement('td');
            cell.className = 'td-content-editable';
            row.appendChild(cell);
          }
          table.appendChild(row);
        }
        console.log(table);
        
        addTableResizeHandle(table);
        addColumnResizeHandle(table);
        addRowResizeHandle(table);

        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.insertNode(table);

            const editableDiv = range.startContainer.parentNode;
            editableDiv.focus();
        }
    };

   
    const addTableResizeHandle = (tableElement) => {
        const editableDiv = tableElement.closest('[contentEditable="true"]');
    
        interact(tableElement).resizable({
            edges: { left: true, right: true, bottom: true, top: true },
        })
        .on('resizestart', function () {
            if (editableDiv) {
                editableDiv.setAttribute('contentEditable', 'false');
            }
            
            tableElement.style.border = '2px dashed #4CAF50';
        })
        .on('resizemove', function (event) {
            const newWidth = event.clientX - event.target.getBoundingClientRect().left;
            const newHeight = event.clientY - event.target.getBoundingClientRect().top;
            event.target.style.width = `${newWidth}px`;
            event.target.style.height = `${newHeight}px`;
        })
        .on('resizeend', function () {
            if (editableDiv) {
                editableDiv.setAttribute('contentEditable', 'true');
            }
            tableElement.style.border = 'none';
        });
    };

    const addColumnResizeHandle = (tableElement) => {
        const columns = tableElement.querySelectorAll('td, th');
    
        columns.forEach((cell) => {
            interact(cell).resizable({
                edges: { right: true },
            })
            .on('resizemove', function (event) {
                const { width } = event.rect;
                event.target.style.width = `${width}px`;
            })
        });
        console.log("Column resizing initialized");
    };

    const addRowResizeHandle = (tableElement) => {
        const rows = tableElement.querySelectorAll('tr');
    
        rows.forEach((row) => {
            interact(row).resizable({
                edges: { bottom: true },
            })
            .on('resizemove', function (event) {
                const { height } = event.rect;
                event.target.style.height = `${height}px`;
            })
        });
    
        console.log("Row resizing initialized");
    };


// ***  Image *** //
    const insertImage = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const dataUrl = event.target.result;
            
            document.execCommand('insertImage', false, dataUrl);

            const images = document.querySelectorAll('img');
            const latestImage = images[images.length - 1]; // Dernière image insérée

            if (latestImage) {
                addImageClickListener(latestImage);
            }
        };
        reader.readAsDataURL(file);
    };

    const addResizeImageHandle = (imageElement) => {
        const editableDiv = imageElement.closest('[contentEditable="true"]');

        interact(imageElement).resizable({
            edges: { left: true, right: true, bottom: true, top: true },
        })
        .on('resizestart', function (event) {
            if (editableDiv) {
                editableDiv.setAttribute('contentEditable', 'false');                
            }
            imageElement.style.border = '2px dashed #4CAF50';
        })
        .on('resizemove', function (event) {
            const { width, height } = event.rect;
            event.target.style.width = `${width}px`;
            event.target.style.height = `${height}px`;
        })
        .on('resizeend', function () {
            if (editableDiv) {
                editableDiv.setAttribute('contentEditable', 'true');
            }
            imageElement.style.border = 'none';
        });

        console.log("function addResizeImageHandle");
    };

    const addImageClickListener = () => {
        const images = document.querySelectorAll('img');   
        images.forEach(image => {
            image.addEventListener('click', (event) => {
                addResizeImageHandle(event.target); 
            });
        });
        console.log("function addImageClickListener");
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            insertImage(file);
            addImageClickListener();
            fileInputRef.current.value = ''; 
        }
    };

// ***  Superscript and SubScript removal *** //    

    const toggleSuperSubScript = (type) => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
    
            // Créer le nouvel élément
            const newElement = document.createElement(type);
    
            // Envelopper le contenu de la sélection dans le nouvel élément
            range.surroundContents(newElement);
    
            const tempElement = document.createElement('span');
            tempElement.className = 'span-edited';
            tempElement.innerHTML = '&nbsp;';
        
            newElement.parentNode.insertBefore(tempElement, newElement.nextSibling);

            // Déplacer le curseur au début du nouveau nœud texte
            range.setStart(tempElement , 1);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };


// ***  Font family (size , choice ) *** //    

    function getContainingDivInfo(selection) {
        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;
      
        // Monter dans l'arbre DOM jusqu'à trouver un élément div
        let current = container;
        while (current && (current.nodeName !== 'DIV' && current.nodeName !== 'SPAN' && current.nodeName !== 'TD')){
          current = current.parentNode;
        }
        return current;
    }

    const wrapSelection = (newStyle,newValue) => {
        const selection = window.getSelection();
        
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const startNode = range.startContainer;

            if (startNode.nodeType === Node.TEXT_NODE) {
                const parentNode = startNode.parentNode;
                const selectedText = range.toString();
                const newElement = document.createElement('span');
                newElement.className = 'span-edited'; 
                newElement.innerText = selectedText;
                newElement.style[newStyle] = newValue;
                console.log("Applying : " + newStyle + " with value : " + newValue );
                console.log(newElement.style[newStyle] +  " : " + newValue);
                // newElement.style.color ='#ef0606';
                range.deleteContents();
                range.insertNode(newElement);
            }
        }
    };


    const updateSelection = (newStyle, newValue) => {
        const selection = window.getSelection();
        
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const startNode = range.startContainer;
            const endNode = range.endContainer;
    
            // Vérifier si la sélection est dans un même parent (span, div, etc.)
            const parentSpan = startNode.parentNode === endNode.parentNode ? startNode.parentNode : null;
            
            if (parentSpan && parentSpan.tagName === 'SPAN') {
                const selectedText = range.toString();
                const parentText = parentSpan.textContent;
                
                console.log("parent text : " + parentText);
                console.log("selected : " + selectedText);
                // Si la sélection n'est pas le texte entier du span parent
                if (selectedText !== parentText) {
                    wrapSelection(newStyle,newValue)
                    // Supprimer le parent span s'il devient vide
                    if (parentSpan.textContent.trim() === '') {
                        parentSpan.remove();
                    }
                    console.log("wrapp again");
                } else {
                    // Si tout le texte du span est sélectionné, appliquer directement le style
                    parentSpan.style[newStyle] = newValue;
                    // wrapMixedSelection(newStyle,newValue);
                    console.log("update again");
                }
            }
        }
    };
    

    const wrapMixedSelection = (newStyle,newValue) => {
        const selection = window.getSelection();
        
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedNodes = [];
            const selectedText = range.toString();
    
            // Récupérer les nœuds dans la sélection
            const commonAncestor = range.commonAncestorContainer;
    
            // Vérifier les nœuds sélectionnés
            const walker = document.createTreeWalker(commonAncestor, NodeFilter.SHOW_TEXT, null, false);
            while (walker.nextNode()) {
                const currentNode = walker.currentNode;
    
                // Si le nœud contient le texte sélectionné
                if (selection.containsNode(currentNode, true)) {
                    selectedNodes.push(currentNode);
                }
            }
    
            // Remplacer le texte sélectionné par un nouveau span
            const newSpan = document.createElement('span');
            newSpan.className = 'span-edited';
            newSpan.innerText = selectedText;
            newSpan.style[newStyle] = newValue;
            // Vérifier si le span a déjà été inséré
            let alreadyInserted = false;
    
            // Remplacer le contenu sélectionné dans chaque nœud
            selectedNodes.forEach((node) => {
                const parentNode = node.parentNode;
                const startOffset = node === selectedNodes[0] ? range.startOffset : 0;
                const endOffset = node === selectedNodes[selectedNodes.length - 1] ? range.endOffset : node.length;

                const rangeForNode = document.createRange();

                const isImage = parentNode.tagName === 'IMG';
                if(isImage === true){
                    alreadyInserted = true;
                }

                const isTable = parentNode.tagName === 'TABLE';
                if(isTable === true){
                    alreadyInserted = true;
                }

                // Supprimer le texte sélectionné
                

                rangeForNode.setStart(node, startOffset);
                rangeForNode.setEnd(node, endOffset);
                rangeForNode.extractContents();

                // Si le span n'a pas encore été inséré
                if (!alreadyInserted) {
                    rangeForNode.insertNode(newSpan.cloneNode(true)); // cloneNode pour insérer un nouveau span
                    alreadyInserted = true; // Marquer comme inséré
                }
            });

            selectedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && (node.tagName === 'IMG' || node.tagName === 'TABLE')) {
                    const rangeForNode = document.createRange();
                    rangeForNode.setStartBefore(node);
                    rangeForNode.insertNode(node.cloneNode(true));
                }
            });
        }
    };



    const handleCursorChange = (newStyle,newValue) =>{
        const selection = window.getSelection();

        if(selection.rangeCount > 0){
            const range = selection.getRangeAt(0);
            const startContainer = range.startContainer;
            const endContainer = range.endContainer;
            
            console.log("debut : " + startContainer.nodeType);
            console.log("fin :  " + endContainer.nodeType);
            console.log("parent debut : " + startContainer.parentNode.nodeType);
            console.log("parent fin : " + endContainer.parentNode.nodeType);

            // ** scene 1 **//
            if(startContainer.parentNode === endContainer.parentNode){
                console.log("miray contenaire kambony reo");
                // ** raha mbl ao am parent source **//
                if(getContainingDivInfo(selection).classList.contains('div-content-editable') || getContainingDivInfo(selection).classList.contains('td-content-editable')){        
                    console.log("Div parent");
                    wrapSelection(newStyle,newValue);
                    window.getSelection().removeAllRanges();
                }else if(getContainingDivInfo(selection).classList.contains('span-edited') || getContainingDivInfo(selection).classList.contains('div-content-editable') || getContainingDivInfo(selection).classList.contains('td-content-editable')){
                    console.log("Span parent");
                    wrapMixedSelection(newStyle,newValue);
                    updateSelection(newStyle,newValue);
                    window.getSelection().removeAllRanges();
                }
            }
            else if(startContainer.parentNode !== endContainer.parentNode){
                console.log("not the same parent bro");
                wrapMixedSelection(newStyle,newValue);
                window.getSelection().removeAllRanges();
            }else{
                console.log("Efa hoe ajanony io");
            }
        }   

    }
   

    const handleFontSizeChange = (event) =>{
        const newSize = event.target.value;
        handleCursorChange('fontSize',newSize);
    }

    const handleFontColorChange = (event) =>{
        // const newColor = `'${event.target.value}'`;
        const newColor = event.target.value;
        console.log(newColor);
        handleCursorChange('color', newColor);
    }

    const handleFontChange = (event) =>{
        const newFont = event.target.value;
        console.log(event.target.value);
        handleCursorChange('fontFamily',newFont);
    }

    



    return(
        <div className='header-editor' >
            <div style={{marginTop:'0em',columnGap:'10px',color:''}} className='toolbar-editor'>
                <div className='toolbar-text'>
                    <button className='toolbar-button'  onClick={() => toggleButton("bold")} ><FormatBoldOutlinedIcon sx={{fontSize:17}}/> </button>
                    <button className='toolbar-button'  onClick={() => toggleButton("italic")}><FormatItalicOutlinedIcon sx={{fontSize:17}}/></button>
                    <button className='toolbar-button'  onClick={() => toggleButton("underline")}><FormatUnderlinedOutlinedIcon sx={{fontSize:17}}/></button>
                    
                    <select className='font-selecor' onChange={handleFontChange }>
                        <option value={'arial'}>Arial</option>
                        <option value={'serif'}>Avec Serif</option>
                        <option value={'monospace'}>Monospace</option>
                    </select>

                    <select className='font-size-selecor' onChange={handleFontSizeChange}>
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

                    <label for="image-upload" class="custom-image-upload">
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
        </div>
    );
}