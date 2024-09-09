import "jodit";
import { useState,useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser/lib/index";

export default function Creation({ placeholder }) {

    const editor = useRef(null);
    const[content,setContent] = useState('');

    const config = useMemo(() => {
        return {
          readonly: false, // All options from https://xdsoft.net/jodit/docs/     
          placeholder: placeholder || "Start typings...",
          uploader: {
            insertImageAsBase64URI: true,
          },
          showCharsCounter: false,
          showWordsCounter: false,
          showXPathInStatusbar: false,
        };
      }, [placeholder]);

    return(
        <>
            <JoditEditor ref={editor} value={content} onChange={newContent =>setContent(newContent)} config={config}>
            </JoditEditor>
            <div>{HTMLReactParser(content)}</div>
        </>

    );
}      