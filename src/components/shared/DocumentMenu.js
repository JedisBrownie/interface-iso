import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import Util from '../shared/Util';

import './css/document.css';

const styleModal = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30em',
  bgcolor: 'white',
  borderRadius : '0.5em',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  p: '1em 1.5em 1em 1.5em'
};
  

export default function DocumentMenu(props) {

  const [openModal, setOpenModal] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null); 

  const [stateStatus , setStatus] = React.useState(false);
  const [stateStatusRefuser ,setStateStatusRefuser ] = React.useState(false);
  const [messageValider, setMessageValider] = React.useState("");
  
  const {status,validerDocument,approuverDocument,refuserValidationDocument,refuserApprobationDocument,raisonRef,getRaisonRefus} = props;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };


  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }




  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);




  const handleValidation = () =>{
    
    validerDocument();

    setStatus(true);
    setMessageValider("Ce document a été validé");
    setTimeout(() =>{
      setStatus(false);
    },3000);
  }

  const handleRefusValidation = () =>{
    refuserValidationDocument();

    const raison = getRaisonRefus();
    if(raison){
      setStateStatusRefuser(true);
      handleCloseModal();
      setTimeout(() =>{
        setStateStatusRefuser(false);
      },3000);
    }else{

    }
  } 


  const handleApprobation = () =>{
    approuverDocument();

    setStatus(true);
    setMessageValider("Ce document a été approuver");
    setTimeout(() =>{
      setStatus(false);
    },4000);
  }


  const handleRefusApprobation = () =>{
    refuserApprobationDocument();

    const raison = getRaisonRefus();
    if(raison){
      setStateStatusRefuser(true);
      handleCloseModal();
      setTimeout(() =>{
        setStateStatusRefuser(false);
      },3000);
    }else{

    }
  } 

  const generateMenuItem = () =>{
    switch(status){
      case 'applicable' : 
        return  (
          <>
  
          </> 
        );

      case 'redaction' : 
        return  (
          <>
            <MenuItem onClick={handleValidation}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Valider document</span></MenuItem>
            <MenuItem onClick={handleOpenModal}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Rejeter document</span></MenuItem>

            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description" >
              <Box sx={styleModal}>
                <span style={{fontWeight:'900',fontFamily:'Lato',fontSize:'18px'}}>
                  Motif de refus
                </span>
                
                <div id='input-revision' style={{fontFamily:'Lato',fontSize:'13px',marginTop:'1.5em'}}>
                    <div role='textbox' ref={raisonRef} contentEditable={true} style={{border:'1px solid grey',padding:'5px 10px',borderRadius:'5px',width:'100%',height:'7em'}}></div>
                </div>

                <button style={{fontFamily:'Lato',fontSize:'12px',marginTop:'1.2em',float:'right',padding:'9px 20px 9px 20px',borderRadius:'5px',background:'#0768ff',color:'white',border:'none',cursor:'pointer'}} onClick={() => handleRefusValidation()}>Valider refus</button>
              </Box>
            </Modal>
          </> 
        );
      
      case 'validation' : 
        return  (
          <>
            <MenuItem onClick={handleApprobation}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Approuver document</span></MenuItem>
            <MenuItem onClick={handleOpenModal}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Rejeter document</span></MenuItem>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description" >
              <Box sx={styleModal}>
                <span style={{fontWeight:'900',fontFamily:'Lato',fontSize:'18px'}}>
                  Motif de refus
                </span>
                
                <div id='input-revision' style={{fontFamily:'Lato',fontSize:'13px',marginTop:'1.5em'}}>
                    <div role='textbox' ref={raisonRef} contentEditable={true} style={{border:'1px solid grey',padding:'5px 10px',borderRadius:'5px',width:'100%',height:'7em'}}></div>
                </div>

                <button style={{fontFamily:'Lato',fontSize:'12px',marginTop:'1.2em',float:'right',padding:'9px 20px 9px 20px',borderRadius:'5px',background:'#0768ff',color:'white',border:'none',cursor:'pointer'}} onClick={() => handleRefusApprobation()}>Valider refus</button>
              </Box>
            </Modal>
          </> 
        );
    }
  }



  return (
    <>  

      <Util stateError={stateStatusRefuser} errorMessage={"Ce document a ètè refuser"} stateStatus={stateStatus} messageStatus={messageValider}></Util>
      
      <Stack direction="column" spacing={2}>
        <div className='button-floating'
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}>
            <TaskOutlinedIcon fontSize='medium' style={{}}></TaskOutlinedIcon>
        </div>
        <div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'top-start' ? 'left top' : 'right bottom',
                }}
              >
                <Paper style={{marginBottom:'0.5em',minWidth:'10em'}}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      {generateMenuItem()}
                      
                      <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Télécharger PDF</span></MenuItem>
                      <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Télécharger document</span></MenuItem>
                      <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Fermer document</span></MenuItem>

                      {/* <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Partager document</span></MenuItem> */}

                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>



      

      
    </>
    
  );
}

