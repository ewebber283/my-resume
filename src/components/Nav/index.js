import React, {useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../../styles/Nav.css";

function Nav() {
    const [expandNav, setExpandNav] = useState(false);
    
    const location = useLocation;
    //run when location changes

    useEffect(() => {
        setExpandNav(false)
    }, [location])
    
    return (
    <div className='navbar' id={expandNav ? 'open' : 'close'}>
        <div className='toggleBtn'>
            <button onClick={() => {setExpandNav((prev) => !prev);
            }}>
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/background'>Background</Link>
        </div>
    </div>
    );
}

export default Nav;