import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import Logo from '../../images/pennyDAO_logo.png';

const PennyDAOLogo = ({onClick, alt}) => {
    return(
        <div className={styles.logo} onClick={onClick}>
            <img src={Logo} alt={alt}/>
        </div>
    )
}

const Hambuger = ({onClick}) => {
    return(
        <div className={styles.hamburger}>
            <label for="check" className={styles.label}>
                <input type="checkbox" id="check" onClick={onClick}/> 
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    );
}

const MobileNavMenu = ({isOpen, onClick}) => {

    return (
        <div className={styles.mobileNavMenu} style={{left: isOpen ? 0 : '-100vw'}}>
            <ul>
                <li>
                    <a style={{ transition: 'opacity 1.2s ease-out, bottom 0.3s ease-out', opacity: isOpen ? 1 : 0, bottom: isOpen ? 0 : '-100px' }} onClick={onClick}>
                        Light Paper
                    </a>
                </li>
            </ul>
        </div>
    )
}

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    }, []);

    return(
        <nav className={styles.nav}>
            
            <PennyDAOLogo/>
            <ul>
                <li>
                    <a>
                        Light Paper
                    </a>
                </li>
            </ul>
            <Hambuger onClick={() => {setIsOpen(!isOpen); !isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial';}}/>
        </nav>
    )
}

export default NavBar;

