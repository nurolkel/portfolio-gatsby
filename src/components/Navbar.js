import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";



const Hamburger = styled("div")`
    background-color: hsl( var(--clr-v-blue));
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${({open}) => open ? "rotate(-45deg)" : "inherit"};
    z-index: 1002;

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: hsl( var(--clr-v-blue));
        content: "";
        position: absolute;
        transition: all 0.3s linear;
        z-index: 1002;
    }

    ::before {
        transform: ${({open}) => open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${({open}) => open ? "0" : "1"};
        transform: ${({open}) => open ? "rotate(90deg) " : "rotate(0deg)"};
        top: 10px;
    }

    @media ${breakpoints.desktop} {
        display: none;
    }
`;



const Navbar = () =>  {
    
    const [open, setOpen] = useState(false);
    const [background, setBackground] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 25) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    }

    const toggleNavBar = () => setOpen(open => !open);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    },[background])

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setOpen(false);
        }
    },[open])

    return (
        <nav className='navbar flex'>
            <div className="nav-center">
                <div className="nav-header flex">
                    <Link to='/'>
                        <h2 className="text-blue uppercase fs-600 letter-spacing-2">Kelvin Nunez</h2>
                    </Link>
                    <div className="toggle" role="Nav Menu" onClick={toggleNavBar}>
                        <Hamburger open={open} />
                    </div>
                </div>
                <div className={open ? "nav-links show-links flex underline-indicators" : "nav-links underline-indicators flex"}>
                    <Link 
                        to="/" 
                        className="nav-link text-white fs-400 uppercase letter-spacing-2" 
                        onClick={toggleNavBar}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/projects" 
                        className="nav-link text-white fs-400 uppercase letter-spacing-2" 
                        onClick={toggleNavBar}    
                    >
                        Projects
                    </Link>
                    <Link 
                        to="/contact" 
                        className="nav-link text-white fs-400 uppercase letter-spacing-2" 
                        onClick={toggleNavBar}    
                    >
                        Contact
                    </Link>  
                </div>
            </div>    
        </nav>
    )
}

export default Navbar;