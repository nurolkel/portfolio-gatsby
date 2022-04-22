import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";


const Navigation = styled("header")`
    position: sticky;
    background-color: ${({ background }) => background ? `hsl( var(--clr-metal-grey) / .95)` : `hsl( var(--clr-black) / .95)`};
    backdrop-filter: blur(2rem);
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    top: 0;
    left: 0;
    transition: background-color ease-out 500ms;
    padding: 1rem 0;
`


const NavItems = styled("nav")`
    display: flex;
    display: ${({ open}) => open ? 'block' : 'none'};
    justify-content: flex-start;
    background-color: ${({ open }) => open ? `hsl( var(--clr-metal-grey) / .95)` : `none`};
    backdrop-filter: ${({ open }) => open ? `blur(2rem)` : ''};
    border: 1px solid var(--light-green-shadow);
    border-radius: 5px;
    align-items: center;
    height: 75vh;
    width: 70vw;
    margin: 0;
    position: fixed;
    top: 6vh;
    right: ${({ open }) => open ? '0' : '-100%'};
    transition: right ease-out 500ms, display 400ms;
        ul {
            display: flex;
            align-items: center;
            gap: 2rem;
            flex-direction: column;
            padding: 0;
            li {
                list-style-type: none;
                transition: transform 500ms;

                :hover {
                    transform: translateY(-5px);
                }

                a {
                    text-decoration: none;
                    transition: color 300ms, transform 500ms;
                    font-size: 2rem;
                    color: ${({ open }) => open ? `var(--lightGrey)` : `var(--lightGrey)`};

                    :hover {
                        color: var(--darkCyan);
                    }
                    &[aria-current="page"] {
                        color: ${({ open }) => open ? `var(--darkGrey)` : `var(--darkGrey)`};
                    }
                }
            }
            
        }

        @media ${breakpoints.lg} {
            flex-direction: row;
            justify-content: space-around;
            position: static;
            display: block;
            height: auto;
            width: 300px;
            border: none;
            ul {
                flex-direction: row;

                li {
                    a {
                        color: hsl( var(--clr-light-grey));
                    }
                }
            }
        }
`;

const Hamburger = styled("div")`
  background-color: hsl( var(--clr-metal-grey));
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${({open}) => open ? "rotate(-45deg)" : "inherit"};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: hsl( var(--clr-metal-grey));
    content: "";
    position: absolute;
    transition: all 0.3s linear;
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

  @media ${breakpoints.lg} {
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
        <Navigation background={background} className="flex">
            <div>
                <Link to="/" className="logo" onClick={toggleNavBar} className="fs-650 letter-spacing-3 text-cyan uppercase">Kelvin Nunez</Link>
            </div>
            <div onClick={toggleNavBar}>
                <Hamburger open={open} />
            </div>
            <NavItems open={open} background={background}>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleNavBar}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleNavBar}>About</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={toggleNavBar}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleNavBar}>Contact</Link>
                    </li>
                </ul>
            </NavItems>
        </Navigation>
    )
}

export default Navbar;