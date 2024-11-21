import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState , useEffect} from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { getDataFromUrl } from '../../function';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '25em',
    bgcolor: 'white',
    borderRadius : '0.5em',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    p: '1em 1.5em 1em 1.5em',
};


export default function ProcessusModal(props){

    const {reference,edition} = props;
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [showProcessusLie, setShowProcessusLie] = useState(false);


    const [openPl , setOpenPl] = React.useState(false);
    const handleOpenPl = () => setOpenPl(true);
    const handleClosePl = () => setOpenPl(false);


    const refCheckBox = useRef();

    const [processusGlobal , setProcessusGlobal] = React.useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await getDataFromUrl(`${apiUrl}/processus/global/all`);
                setProcessusGlobal(response);
            }catch(error){
                console.error("Erreur lors de la récupération des données : ",error);
            }
        };
        fetchData();
    },[]);

    
    const [pgSelected , setPgSelected ] = useState({nomPg : [], idPg : []});

    const handleChoixPg = (event) => {
        const { checked, value, id } = event.target;

        setPgSelected(prevState => {
            const updatedNoms = checked 
                ? [...prevState.nomPg, value] 
                : prevState.nomPg.filter(nom => nom !== value);

            const updatedIds = checked 
                ? [...prevState.idPg, id] 
                : prevState.idPg.filter(currId => currId !== id);

            return { nomPg: updatedNoms, idPg: updatedIds };
        });
    };



    const [processusLie , setProcessusLie] = React.useState([]);

    // Fetch linked processes based on selected IDs
    useEffect(() => {
        const fetchProcessusLie = async () => {
            try {
                const linkedProcessusPromises = pgSelected.idPg.map(id =>
                    getDataFromUrl(`${apiUrl}/processus/liste/${id}`)
                );
                const linkedProcessusArray = await Promise.all(linkedProcessusPromises);
                setProcessusLie(linkedProcessusArray.flat()); // Flatten the array if multiple responses
            } catch (error) {
                console.error("Erreur lors de la récupération des processus liés :", error);
            }
        };

        if (pgSelected.idPg.length > 0) {
            setShowProcessusLie(true); // Show the arrow only if something is selected
            fetchProcessusLie();
        } else {
            setShowProcessusLie(false); // Hide the arrow if nothing is selected
            setProcessusLie([]);
        }
    }, [pgSelected]);

    const [plSelected , setPlSelected] = useState({nomPl: [] , idPl : []});

    const handleChoixPl = (event) =>{
        const {checked , value , id } = event.target;

        setPlSelected(prevState => {
            const updatedNoms = checked 
                ? [...prevState.nomPl , value]
                : prevState.nomPl.filter(nom => nom !== value);

            const updatedIds = checked
                ? [...prevState.idPl , id]
                : prevState.idPl.filter(currId => currId !== id);

            return { nomPl :  updatedNoms  , idPl :  updatedIds}
        })
    }


    return(
        <>
            <div className='liste-processus'>
                <div className='title'>
                    <div style={{paddingLeft:'1.5em'}}>Processus Global</div>
                    <div style={{paddingLeft:'1.5em'}}>Processus Lie</div>
                </div>
                <div className='processus'>

                    {/* style={{justifyContent:'flex-end'}} */}

                    
                    <div className='valeur-champ-choice' >
                        <span className='span-value' ref={reference.choixProcessusGlobal}> 
                            {pgSelected.nomPg.join(', ')}
                        </span>

                        
                        {edition ?(
                                <span className='span-arrow iso' onClick={handleOpen}><KeyboardArrowDownIcon fontSize='small'  style={{fontWeight:900}}/></span>
                            ) : (
                                <></>
                        )}
                    </div>

                    <div className='valeur-champ-choice' >
                        <span className='span-value' ref={reference.choixProcessusLie}> 
                            {plSelected.nomPl.join(', ')}
                        </span>

                        {/* <span className='span-arrow iso' onClick={handleOpenPl}><KeyboardArrowDownIcon fontSize='small'  style={{fontWeight:900}}/></span> */}

                        {edition && showProcessusLie ?(
                            <>
                                <span className='span-arrow iso' onClick={handleOpenPl}><KeyboardArrowDownIcon fontSize='small'  style={{fontWeight:900}}/></span>
                            </>
                        ):(
                            <></>
                        )}
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                    <Box sx={style}>
                        <div >

                            <form style={{fontSize:'13px',marginTop:'5px'}} >
                                {processusGlobal? (
                                    <>
                                        <div className='row-checkbox'>
                                            {processusGlobal.map((item,index) => (

                                                <div className='choice_checkbox' key={index} ref={refCheckBox}>
                                                    <input type='checkbox' name="valuePg[]" value={`${item.idProcessusGlobal} - ${item.nom}`} id={item.idProcessusGlobal} checked={pgSelected.nomPg.includes(`${item.idProcessusGlobal} - ${item.nom}`)} onChange={handleChoixPg}/>
                                                    <label htmlFor={item.idProcessusGlobal} style={{marginLeft:'15px'}}>{item.idProcessusGlobal} - {item.nom}</label>
                                                </div>
                                            ))}

                                            <div className='choice_button' style={{marginTop:'20px',display:'flex',justifyContent:'end'}}>
                                                <Button onClick={handleClose} size='small' variant="contained" style={{boxShadow:'none'}}><span style={{textTransform:'none',fontSize:'12px',fontFamily:'Lato',padding:'2px 14px 2px 14px'}}>Valider</span></Button>
                                            </div>

                                        </div>
                                    </>
                                ):(
                                    <>...</>
                                )}
                                
                                
                            </form>
                        </div>
                    </Box>
            </Modal>



            <Modal
                open={openPl}
                onClose={handleClosePl}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                    <Box sx={style}>
                        <div >
                            <div className='modal_entete' style={{display:'flex',justifyContent:'center'}}>

                            </div>

                            <form style={{fontSize:'13px',marginTop:'5px'}} >

                                {processusLie ? (
                                    <> 
                                        <div className='row-checkbox'>
                                        {processusLie.map((item,index) => (

                                            <div className='choice_checkbox' key={index} ref={refCheckBox}>
                                                <input type='checkbox' name="valuePl[]" value={`${item.idProcessusLie} - ${item.nom}`} id={item.idProcessusLie} checked={plSelected.nomPl.includes(`${item.idProcessusLie} - ${item.nom}`)} onChange={handleChoixPl}/>
                                                <label htmlFor={item.idProcessusLie} style={{marginLeft:'15px'}}>{item.idProcessusLie} - {item.nom}</label>
                                            </div>
                                            ))}

                                            <div className='choice_button' style={{marginTop:'20px',display:'flex',justifyContent:'end'}}>
                                                <Button onClick={handleClosePl} size='small' variant="contained" style={{boxShadow:'none'}}><span style={{textTransform:'none',fontSize:'12px',fontFamily:'Lato',padding:'2px 14px 2px 14px'}}>Valider</span></Button>
                                            </div>

                                        </div>
                                    </>
                                ) : (
                                    <>...</>
                                )}
                                
                            </form>
                        </div>
                    </Box>
            </Modal>
        </>
    );
}