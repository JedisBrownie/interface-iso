import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState } from 'react';
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
    width: '20em',
    bgcolor: 'white',
    borderRadius : '0.5em',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    p: '1em 1.5em 1em 1.5em',
};

const dataActivite = [
    {id:'1',nom:"Ciment"},
    {id:'2',nom:"Pouzzolane"},
    {id:'3',nom:"Béton"},
    {id:'4',nom:"Support"},
    {id:'5',nom:"Toutes activités"}
];

const dataSite = [
    {id:'1',nom:"Tana"},
    {id:'2',nom:"Tamatave"},
    {id:'3',nom:"Diégo"},
    {id:'4',nom:"Ibity"},
    {id:'5',nom:"Tulear"},
    {id:'6',nom:"Tous"}
];

export default function ValeurModal({type,reference,edition}){


    const [selectedValues, setSelectedValues] = useState([]);



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const refCheckBox = useRef();


    const handleCheckboxChange = (event) => {
        const { checked, value } = event.target;

        const updatedValues = checked
            ? [...selectedValues, value]
            : selectedValues.filter(item => item !== value);

        setSelectedValues(updatedValues);

        // Update the innerHTML or textContent of the ref
        if (reference && reference.current) {
            reference.current.textContent = updatedValues.join(', ');
        }
    };




    return(
        <>
            <div className='valeur-champ-choice'>                

                <span className='span-value' ref={reference}>
                    {selectedValues.join(', ')}
                </span>


                {edition ?(
                    <span className='span-arrow iso' onClick={handleOpen}><KeyboardArrowDownIcon fontSize='small'  style={{fontWeight:900}}/></span>
                ) : (
                    <></>
                )}

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {type === 'activite' ? (
                    <Box sx={style}>
                        <div >
                            <div className='modal_entete' style={{display:'flex',justifyContent:'center'}}>
                                {/* <span ><img src='/logo.png' style={{width:'5em',height:'5em',objectFit:'contain'}}/></span> */}
                                {/* <span style={{alignContent:'center',marginRight:'10px',marginTop:'5px'}}><h3>Activités</h3></span> */}
                            </div>

                            <form style={{fontSize:'13px',marginTop:'5px'}} >

                                {dataActivite.map((item,index) => (
                                    <div className='choice_checkbox' key={index} ref={refCheckBox}>
                                        <input type='checkbox' name="value[]" value={item.nom} id={item.id} checked={selectedValues.includes(item.nom)} onChange={handleCheckboxChange}/>
                                        <label htmlFor={item.id} style={{marginLeft:'15px'}}>{item.nom}</label>
                                    </div>
                                ))}

                                <div className='choice_button' style={{marginTop:'15px',display:'flex',justifyContent:'end'}}>
                                    <Button onClick={handleClose} size='small' variant="contained" style={{boxShadow:'none'}}><span style={{textTransform:'none',fontSize:'12px',fontFamily:'Lato',padding:'2px 14px 2px 14px'}}>Valider</span></Button>
                                </div>
                                
                            </form>
                        </div>
                    </Box>
                ) : (
                    <Box sx={style}>
                        <div >
                            <div className='modal_entete' style={{display:'flex',justifyContent:'center',}}>
                                {/* <span ><img src='/logo.png' style={{width:'5em',height:'5em',objectFit:'contain'}}/></span> */}
                                {/* <span style={{alignContent:'center',marginRight:'10px',marginTop:'5px'}}><h3>Activités</h3></span> */}
                            </div>

                            <form style={{fontSize:'13px',marginTop:'5px'}} >

                                {dataSite.map((item,index) => (
                                    <div className='choice_checkbox' key={index} ref={refCheckBox}>
                                        <input type='checkbox' name="value[]" value={item.nom} id={item.id} checked={selectedValues.includes(item.nom)} onChange={handleCheckboxChange}/>
                                        <label htmlFor={item.id} style={{marginLeft:'15px'}}>{item.nom}</label>
                                    </div>
                                ))}

                                <div className='choice_button' style={{marginTop:'15px',display:'flex',justifyContent:'end'}}>
                                    <Button onClick={handleClose} size='small' variant="contained" style={{boxShadow:'none'}}><span style={{textTransform:'none',fontSize:'12px',fontFamily:'Lato',padding:'2px 14px 2px 14px'}}>Valider</span></Button>
                                </div>
                                
                            </form>
                        </div>
                    </Box>
                )}
                
            </Modal>
        </>
    );
}