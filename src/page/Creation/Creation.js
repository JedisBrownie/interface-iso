import "jodit";
import { useState,useRef, useMemo,useEffect} from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser/lib/index";
import "./creation.css";

export default function Creation({ placeholder }) {

    const editor = useRef(null);
    const[content,setContent] = useState('');
    
    const buttons = [
        "undo",
        "redo",
        "bold",
        "underline",
        "italic",
        "superscript",
        "subscript",
        "align",
        "ul",
        "ol",
        "outdent",
        "indent",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "image",
        "link",
        "table",
        "hr",
        "eraser",
        "copyformat",
        "fullsize",
        "selectall",
        "print",
      ];

      const config = useMemo(() => {
        return {
          readonly: false,
          placeholder: placeholder || "",
          uploader: {
            insertImageAsBase64URI: true,
          },
          showCharsCounter: false,
          showWordsCounter: false,
          showXPathInStatusbar: false,
          askBeforePasteHTML: false,
          askBeforePasteFromWord: false,
          addNewLine: false,
          buttons // No longer in dependency array
        };
      }, [placeholder]);

 

    return(
        <>
          <JoditEditor ref={editor} value={content} onChange={newContent =>setContent(newContent)} config={config}>
          </JoditEditor>
        </>

    );
}      