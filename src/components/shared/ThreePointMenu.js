import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
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


    const handleCopy = () => {
        console.log("vous avez copié : " + reference + " , " + idDocument);
    }

    const handleModification = () =>{
        console.log("Modifier");
    }

    const handleRevision = () =>{
        console.log("Demande revision");
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
            </div>
        </>
    );
}