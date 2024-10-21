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
import { useEffect , useState , useRef , useCallback} from 'react';
import { Dropdown, DropdownItem , DropdownMenu} from 'semantic-ui-react';


export default function Option({ handleSaveBrouillon }) {

  // { **  props fonction   ** }
  const [hover, setHover] = useState(false); // Track hover state

  const handleMouseEnter = () => {
    setHover(true); // Set hover state to true when mouse enters
  };

  const handleMouseLeave = () => {
    setHover(false); // Set hover state to false when mouse leaves
  };


  console.log("option 1 : " + handleSaveBrouillon);

  const test = useCallback(() => {
    console.log("option 3 : " + handleSaveBrouillon);
  }, []);

  
  console.log("option 2 : " + handleSaveBrouillon);

  return (

    <Dropdown text='Document' style={{backgroundColor:'white',color:'black',minWidth:'10.5em',boxShadow:'rgba(163, 163, 163, 0.2) 0px 2px 8px 0px',padding:'0.5em 0.8em',fontWeight:700,minHeight:'3.5em',borderRadius:'0.5em'}} >
    
      <DropdownMenu style = {{marginTop:'0em',backgroundColor:'white',boxShadow:'rgba(163, 163, 163, 0.2) 0px 2px 8px 0px'}}>
          <DropdownItem style={{fontSize:'12px'}}> <span >Sauvegarder brouillon</span></DropdownItem>
          <DropdownItem ></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

