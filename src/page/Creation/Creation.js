import "jodit";
import { useState,useRef, useMemo,useEffect} from "react";
import JoditEditor from "jodit-react";
import ReactDOMServer from 'react-dom/server';
import Processus from "../../components/creation/Processus";
import "./creation.css";

export default function Creation({ placeholder }) {

    const editor = useRef(null);
    const contenu =  ReactDOMServer.renderToString(<Processus></Processus>);
    const[content,setContent] = useState(contenu);
    console.log(contenu);
    
    // useEffect(() => {
    //   const processHtml = HTMLReactParser(<Processus />);
    //   setContent(processHtml.toString());
    // }, []);

    // const joditEditorRef = useRef(null);

    // useEffect(() => {
    //   const joditEditor = joditEditorRef.current;
    //   if (joditEditor) {
    //     lockEditor(joditEditor);
    //   }
    // }, [joditEditorRef.current]);
  
    // const lockEditor = (editor) => {
    //   editor.setAttribute('contentEditable', false);
    // };
    

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
          <JoditEditor ref={editor} value={content} onChange={newContent =>setContent(newContent)} config={config} component={<Processus></Processus>}>
          </JoditEditor>

          {/* <div>{HTMLReactParser(content)}</div> */}
        </>

    );
}      