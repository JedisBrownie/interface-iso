export default function Toolbar(){
    const execCommand = (command,arg) =>{
        document.execCommand(command,false,arg);
    }

    const toggleButton = (command) =>{
        document.execCommand(command,false,null);
    };

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

        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.insertNode(table);

            const editableDiv = range.startContainer.parentNode;
            editableDiv.focus();
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
            </div>
        </>
    );
}