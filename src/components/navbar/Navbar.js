import './navbar.css';
import { Dropdown, DropdownItem , DropdownMenu} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function Navbar(){
    
    const navigate = useNavigate();

    const handleClickArchivesProcessus = () =>{
        navigate('/brouillon');
    }


    return(
        <div className="ui inverted large top fixed text menu" style={{padding:'5px 50px 5px 50px',marginBottom:'20vh'}} id="menu">
                <div className="left menu">
                    <div className="ui tiny image" style={{marginTop:'6px'}}>
                        <img src="./logo_blanc.png" alt="logo"></img>    
                    </div>
                </div>

                <div className="item" style={{display:'flex',justifyContent:'center',columnGap:'1.6rem',fontSize:'0.9rem'}}>
                    <a href = "/brouillon" className="item">
                        Mes brouillons
                    </a>    
                    <a href = "/navigateur" className ="item">
                        Accès rapide navigateur
                    </a>

                    <a href = "/valable" className ="item">
                        MMI
                    </a>
                    
                    <Dropdown text={"Archives"} style={{fontSize:'0.9rem'}} >
                        <DropdownMenu>
                            <DropdownItem text={"Par processus"} onClick={handleClickArchivesProcessus}></DropdownItem>
                            <DropdownItem text={"Par date"}></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown text={'Création document'} style={{fontSize:'0.9rem'}}>
                        <DropdownMenu>
                            <DropdownItem text={"Processus"} href="/creation"></DropdownItem>
                            <DropdownItem text={"Sous Processus"}></DropdownItem>
                            <DropdownItem text={"Fiche d'instruction"}></DropdownItem>
                            <DropdownItem text={"Enregistrement"} href="/edition"></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div className="right menu">
                    {/* <div className="item">
                        <Badge badgeContent={1} max={9} color='primary'>
                            <NotificationsNoneIcon  style={{color:'white',fontSize:'1.5em'}} fontSize='medium' className='icons'></NotificationsNoneIcon>   
                        </Badge>
                    </div> */}

                    <div className="item" style={{fontSize:'0.9rem'}}>
                        <div className="ui icon input">
                            <i className="search link icon"></i>
                            <input type="text" placeholder="Rechercher document..." style={{borderRadius:'4rem'}}/>
                        </div>
                    </div>

                </div>
        </div>
    );
}