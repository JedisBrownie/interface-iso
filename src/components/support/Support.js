import { useRef, useState ,useEffect} from 'react';
import './css/support.css';


export default function Support(props){

    const {type,edition,titre} = props;

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleRemoveFile = (indexToRemove) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
    };



    const imageIcon = [
        { icon: '/icons/WORLD.svg', extensions: ['docx', 'doc', 'docm', 'dot', 'dotx', 'dotm'] },
        { icon: '/icons/EXCEL.svg', extensions: ['xlsx', 'xls', 'csv', 'xlsm'] },
        { icon: '/icons/PDF.svg', extensions: ['pdf'] },
        { icon: '/icons/POWERPOINT.svg', extensions: ['pptx', 'ppt', 'pptm'] },
        { icon: '/icons/RAR.svg', extensions: ['rar', 'zip', 'iso'] },
        { icon: '/icons/SETUP.png', extensions: ['exe', 'msi'] },
        { icon: '/icons/TEXT.svg', extensions: ['txt', 'md', 'rtf'] },
        { icon: '/icons/IMAGE.svg', extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'] },
        { icon: '/icons/VIDEO.svg', extensions: ['mp4', 'mov', 'avi', 'mkv'] },
        { icon: '/icons/AUDIO.svg', extensions: ['mp3', 'wav', 'flac', 'aac'] },
        { icon: '/icons/ARCHIVE.svg', extensions: ['7z', 'tar', 'gz'] }
    ];
    
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileExtension = file.name.split('.').pop().toLowerCase();

            const fileIcon = imageIcon.find(item => 
                item.extensions.includes(fileExtension)
            )?.icon || '/icons/DEFAULT.svg'; 

            const fileURL = URL.createObjectURL(file);

            const newFile = {
                fileName: file.name,
                fileLocation: file.path || '',
                fileExtension: fileExtension,
                fileIcon: fileIcon,
                fileURL: fileURL
            };

            console.log(newFile); 
            setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
        }
    };

    const handlePreviewOrDownload = (file) => {
        const link = document.createElement('a');
        link.href = file.fileURL;
        link.download = file.fileName; 
        link.target = "_blank";
        link.click();
    };

    useEffect(() => {
        if (champTitre.current && edition) {
            champTitre.current.innerHTML = titre; // Injecte le HTML depuis `titre`
        }
    }, [titre]);

    const champTitre = useRef();

    return(
        <div className='paper-five'> 
            <div className="entete" contentEditable='false'>
                <div contentEditable='false' className="logo">
                    <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                    {/* <img src="/logo/secondaire-rouge.svg" alt="" style={{height:'7em'}}/> */}

                </div>
                <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                    <div className="div-content-editable" role="textbox" ref={champTitre} suppressContentEditableWarning={true} contentEditable="false" style={{textAlign:'center',color:'red',height:'fit-content'}}>
                    </div>

                    
                    <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                        <h3>{type}</h3> 
                    </div>

                    <div>Ce document est en cours de rédaction !</div >
                </div>
            </div>

            <div className='support'>
                
                {edition ? (
                    <>
                        <label htmlFor='file-upload'><div className='head-title' style={{cursor:'pointer'}}>Document support</div></label>

                        <div className='liste-champ'>
                            {uploadedFiles.length > 0 ? (
                                uploadedFiles.map((file, index) => (
                                    <div className='span-support' key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} >
                                        
                                            <span className='span-support-image' onClick={() => handlePreviewOrDownload(file)}>
                                                <img src={file.fileIcon} alt="" style={{width:'2em',height:'2em'}}/>
                                            </span>
                                            <span className='span-support-titre'>
                                                {file.fileName}
                                            </span>                  

                                        {hoveredIndex === index && (
                                            <button 
                                                onClick={() => handleRemoveFile(index)} 
                                                style={{
                                                    position: 'absolute',
                                                    top: '5px',
                                                    right: '5px',
                                                    background: 'rgb(215, 41, 41)',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '50%',
                                                    cursor: 'pointer',
                                                    width: '20px',
                                                    height: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '12px'
                                                }}>
                                                ✕
                                            </button>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <>
                                    <p style={{textAlign:'center',marginTop:'2em',width:'100%'}}>Aucun fichier téléchargé pour le moment.</p>
                                </>
                            )}
                        </div>

                        <div className='fichier-upload'>
                            <input
                                id="file-upload"
                                type="file"
                                onChange={handleFileUpload}
                                hidden
                                style={{ marginTop: '10px',color:'black'}} 
                            />                            
                        </div>
                    </>
                ) : (
                    <>
                        <div className='head-title'>Document support</div>
                        <div className='liste-champ' >
                        </div>
                    </>
                )}
                
            </div>
        </div>
    );
}