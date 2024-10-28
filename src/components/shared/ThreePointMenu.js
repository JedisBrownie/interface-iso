import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, alpha } from '@mui/material/styles';
import React from 'react';

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 4,
      marginRight: theme.spacing(1),
      minWidth: '10em',
      color: 'rgb(55, 65, 81)',
      boxShadow:
        'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
      ...theme.applyStyles('dark', {
        color: theme.palette.white,
      }),
    },
  }));

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
  
export default function ThreePointMenu(props){

    const {modification , reference , idDocument} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    // fonctionnalité 
    const handleCopy = () => {
        console.log("vous avez copié : " + reference + " , " + idDocument);
    }

    const handleModification = () =>{
        console.log("Modifier");
    }

    const handleRevision = () =>{
        console.log("Demande revision");
        handleOpenModal();
    }

    const handleClickButtonModal = () =>{
      console.log("voaray ny fangatahanao");
      handleCloseModal();
    }



    return(
        <>
            <div>
                <IconButton
                   id="demo-customized-button"
                   aria-controls={open ? 'demo-customized-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   variant="contained"
                   onClick={handleClick} >

                    <MoreVertIcon />

                </IconButton>

                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                      }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem style={{fontFamily:'Lato',fontWeight:'500',fontSize:'12px'}} onClick={handleCopy}>Copier référence</MenuItem>
                    {modification === true ? (
                        <MenuItem style={{fontFamily:'Lato',fontWeight:'500',fontSize:'12px'}} onClick={handleModification}>Modifier</MenuItem>
                    ) : (
                        <MenuItem style={{fontFamily:'Lato',fontWeight:'500',fontSize:'12px'}} onClick={handleRevision}>Demander une révision</MenuItem>
                    )}
                </StyledMenu>

                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description" >
                  <Box sx={styleModal}>
                    <span style={{fontWeight:'900',fontFamily:'Lato',fontSize:'18px'}}>
                      Raison de la demande de révision
                    </span>
                    
                    <div id='input-revision' style={{fontFamily:'Lato',fontSize:'13px',marginTop:'1.5em'}}>
                        <div role='textbox' contentEditable={true} style={{border:'1px solid grey',padding:'5px 10px',borderRadius:'5px',width:'100%',height:'7em'}}></div>
                    </div>

                    <button style={{fontFamily:'Lato',fontSize:'12px',marginTop:'1.2em',float:'right',padding:'9px 20px 9px 20px',borderRadius:'5px',background:'#0768ff',color:'white',border:'none',cursor:'pointer'}} onClick={() => handleClickButtonModal()}>Envoyer demande</button>
                  </Box>
                </Modal>
            </div>
        </>
    );
}