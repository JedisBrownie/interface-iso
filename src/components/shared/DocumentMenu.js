import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './css/document.css';

export default function DocumentMenu() {
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  return (
    <>  
      <div className='header-document-menu'> 
    
        
      </div>
    
      <Stack direction="column" spacing={2}>
        <div className='button-floating'
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}>
            <AddIcon />
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
                      <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Télécharger PDF</span></MenuItem>
                      <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Télécharger document</span></MenuItem>
                      
                      
                      <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.85em',fontWeight:'600'}}>Partager document</span></MenuItem>

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

