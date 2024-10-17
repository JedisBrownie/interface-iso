import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';

export default function Option() {
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
    <Stack direction="row" spacing={2} >
      
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{backgroundColor:'white',color:'black',minWidth:'12em',boxShadow:'rgba(163, 163, 163, 0.2) 0px 2px 8px 0px',padding:'0.5em 0.8em',fontWeight:700,minHeight:'4em',borderRadius:'4em',marginTop: '0em'}}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <TaskOutlinedIcon fontSize='small' style={{marginRight:'0.7em'}}></TaskOutlinedIcon><span style={{textTransform:'none',fontFamily:'Lato',fontSize:'0.95em'}}>Document</span>
        </Button>

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
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper style={{marginTop:'0.2em',minWidth:'12em'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown} >

                    <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.90em',fontWeight:'600'}}>Sauvegarder brouillon</span></MenuItem>
                    <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.90em',fontWeight:'600'}}>Visualiser document</span></MenuItem>
                    
                    
                    <MenuItem onClick={handleClose}><span style={{fontFamily:'Lato',fontSize:'0.90em',fontWeight:'600'}}>Valider rédaction</span></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}