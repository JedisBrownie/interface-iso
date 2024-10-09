import './table.css';
import { useEffect, useRef , useState } from 'react';
import interact from 'interactjs';
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
    const removeScript = () =>{
        document.execCommand('superscript', false, null);
        document.execCommand('subscript', false, null);
    };


// ***  Font family (size , choice ) *** //    
    const handleFontChange = (event) =>{
        const value = event.target.value;

        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            // Create a new span element to apply the font style
            const span = document.createElement('span');
            span.style.fontFamily = value;

            // Wrap the selected text in the span
            range.surroundContents(span);
        }
    }

    // const handleFontSizeChange = (event) =>{
    //     const value = event.target.value;
    //     document.execCommand("fontSize",null,value);
    //     // const selection = window.getSelection();
    //     // if (selection.rangeCount > 0) {
    //     //     const range = selection.getRangeAt(0);
    //     //     const span = document.createElement('span');
    //     //     span.style.fontSize = `${value}px`;
    //     //     range.surroundContents(span);
    //     // }

        
    // }

    const handleFontSizeChange = (event) => {
        const newSize = event.target.value;
        const selection = window.getSelection();
    
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedNode = range.commonAncestorContainer;
    
            // Trouver le premier span parent avec une taille de police définie
            let parentSpan = selectedNode;
            while (parentSpan && parentSpan.tagName === 'SPAN' && getComputedStyle(parentSpan).fontSize) {
                parentSpan = parentSpan.parentNode;
            }
    
            // Si un span parent avec une taille de police existe, mettre à jour le contenu
            if (parentSpan && parentSpan.tagName === 'SPAN') {
                const newContent = document.createElement('span');
                newContent.style.fontSize = `${newSize}px`;
                newContent.appendChild(range.extractContents());
                parentSpan.appendChild(newContent);
            } else {
                // Sinon, créer un nouveau span
                const newSpan = document.createElement('span');
                newSpan.style.fontSize = `${newSize}px`;
                range.surroundContents(newSpan);
            }
        }
    };




    return(
        <>
            <div style={{marginTop:'2em',columnGap:'10px'}}>
                <button style={{marginLeft:'10px'}} id="boldButton" onClick={() => toggleButton("bold")}>Bold</button>
                <button style={{marginLeft:'10px'}} id="italicButton" onClick={() => toggleButton("italic")}>Italic</button>
                <button style={{marginLeft:'10px'}} id="underlineButton" onClick={() => toggleButton("underline")}>Underline</button>
                <button onClick={() => toggleButton("insertUnorderedList")}>
                    Bullet Points
                </button>
                <button onClick={() => toggleButton("insertOrderedList")}>
                    Order points
                </button>
                <button onClick={() => createTable()}>Create Table</button>

                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ marginTop: '10px' }} />

                <button onClick={() => toggleButton("indent") }>Indent</button>
                <button onClick={() => toggleButton("outdent") }>Outdent</button>
                <button onClick={() => toggleButton("superscript") }>Superscript</button>
                <button onClick={() => toggleButton("subscript") }>SubScript</button>

                {/* <button onClick={() => execCommand("fontName","serif")}>Change font</button> */}
                <select className='font-selecor' onChange={handleFontChange }>
                    <option value={'arial'}>Arial</option>
                    <option value={'serif'}>Avec Serif</option>
                    <option value={'monospace'}>Monospace</option>
                </select>

                <select className='font-size-selecor' onChange={handleFontSizeChange}>
                    <option value={'8'}>8</option>
                    <option value={'10'}>10</option>
                    <option value={'12'}>12</option>
                    <option value={'14'}>14</option>
                    <option value={'18'}>18</option>
                    <option value={'20'}>20</option>
                    <option value={'24'}>24</option>
                </select>


            </div>
        </>
    );
}