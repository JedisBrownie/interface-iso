export default function Enregistrement(){
    return(
        <>
            <div key={"key1"} className="div-content-editable" role="textbox" contentEditable='false' style={{width:'50%',height:'fit-content',outline:'1px solid grey',marginTop:'2em',marginLeft:'4em',borderRadius:'5px',fontFamily:'Segoe UI'}}>
                <div contentEditable='false' style={{background:'',width:'100%',height:'20px'}}>Tsy mety fafana</div>
                <div className="div-content-editable" contentEditable='true' style={{background:'',width:'50%',height:'fit-content',minHeight:'10em'}}></div>
            </div>
            <div key={"key2"}  role="textbox" contentEditable="true" className="div-content-editable" style={{width:'50%',height:'fit-content',minHeight:'30px',outline:'1px solid grey',marginTop:'2em',marginLeft:'4em',borderRadius:'5px',fontFamily:'Segoe UI'}} >

            </div>
        </>
    );
}