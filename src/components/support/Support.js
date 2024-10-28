import { useState } from 'react';
import './css/support.css';


export default function Support(props){

    const {type,edition,titre} = props;

    const [uploadedFiles, setUploadedFiles] = useState([]);

    // Convert file to Base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleUploadFile = async (e) => {
        const files = Array.from(e.target.files); // Convert FileList to array
        const filePromises = files.map(file => convertToBase64(file));

        // Wait for all file conversions to finish
        const fileBase64s = await Promise.all(filePromises);

        // Add new files to the state
        setUploadedFiles([...uploadedFiles, ...fileBase64s]);
    };

    return(
        <div className='paper-five'>
            <div className="entete" contentEditable='false'>
                <div contentEditable='false' className="logo">
                    <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                </div>
                <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                    <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                        <h1>{titre}</h1> 
                    </div>
                    
                    <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                        <h3>{type}</h3> 
                    </div>

                    <div >Ce document est en cours de rédaction !</div >
                </div>
            </div>

            <div className='support'>
                <div className='head-title'>Document support</div>

                
                {edition ? (
                    <>
                        <div className='liste-champ'>
                        {uploadedFiles.length > 0 ? (
                            uploadedFiles.map((file, index) => (
                                <div key={index} style={{marginBottom: '10px'}}>
                                    <a href={file} download={`uploaded-file-${index + 1}`}>
                                        Fichier {index + 1}
                                        {console.log(file.name)}
                                    </a>
                                </div>
                            ))
                        ) : (
                            <p>Aucun fichier téléchargé pour le moment.</p>
                        )}
                        </div>
                        <div className='fichier-upload'>
                            <form  >
                                <input
                                    id="image-upload"
                                    type="file"
                                    multiple
                                    onChange={handleUploadFile}
                                    style={{ marginTop: '10px',color:'black'}} />

                                <button type='submit'>Ajouter</button>
                            </form>
                        </div>
                    </>
                ): (
                    <>
                        <div className='liste-champ'></div>
                    </>
                )}
                
            </div>
        </div>
    );
}