import './navbar.css';
import { Dropdown, DropdownItem , DropdownMenu} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function Navbar(){
    

    return(
        <div className="ui inverted large top fixed text menu" style={{padding:'5px 50px 5px 50px',marginBottom:'20vh'}} id="menu">
                <div className="left menu">
                    <div className="ui image" style={{marginTop:'6px'}}>
                        {/* <img src="./logo_blanc.png" alt="logo"></img>     */}
                        <img src='/logo/secondaire-blanc.svg' style={{width:'8.5em',height:'4em',objectFit:'contain'}} alt='logo'/>
                    </div>
                </div>

                <div className="item" style={{display:'flex',justifyContent:'center',columnGap:'1.6rem',fontSize:'0.9rem'}}>
                    <a href = "/brouillon" className="item">
                        Mes documents
                    </a>    
                    <a href = "/navigateur" className ="item">
                        Accès rapide navigateur
                    </a>

                    <a href = "/manuel" className ="item">
                        MMI
                    </a>
                    
                    <Dropdown text={"Archives"} style={{fontSize:'12px'}} >
                        <DropdownMenu style = {{marginTop:'1em',marginLeft:'-0.5em'}}>
                            <DropdownItem text={"Par processus"} href="archive/processus"></DropdownItem>
                            <DropdownItem text={"Par date archivage"} href="archive/date"></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown text={'Création document'} style={{fontSize:'12px'}}>
                        <DropdownMenu style = {{marginTop:'1em',marginLeft:'-0.5em'}}>
                            <DropdownItem text={"Processus"} href="/creation/processus"></DropdownItem>
                            <DropdownItem text={"Sous Processus"} href="creation/sous-processus"></DropdownItem>
                            <DropdownItem text={"Fiche d'instruction"} href="creation/fiche"></DropdownItem>
                            <DropdownItem text={"Enregistrement"} href="/creation/enregistrement"></DropdownItem>
                            <DropdownItem text={"Navigateur"} href="/creation/navigateur"></DropdownItem>
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
                        {/* <div className="ui icon input">
                            <i className="search link icon"></i>
                            <input type="text" placeholder="Rechercher document..." style={{borderRadius:'4rem'}}/>
                        </div> */}
                        <div className="ui icon input">
                            <input type="text" placeholder="Rechercher document..." style={{borderRadius:'0.5rem',width:'18em',height:'2.8em',fontSize:'12px',borderRadius:'2em'}}/>
                            <i className="search link icon" style={{marginRight:'0.2em',fontSize:'12px'}}></i>
                        </div>
                    </div>

                </div>
        </div>
    );
}