import React from "react";
import { Link } from "gatsby";
import { FooterContainer } from "./Container";




const Footer = () =>  (
        <FooterContainer clasName="bg-black--filter padding-top-bottom flow flow--space-small margin-top-bottom">
            <p className="fs-400 letter-spacing-3 text-white uppercase">&copy; <Link to ="/" aria-label="Kelvin Nunez Portfolio" className="text-blue">Kelvin Nunez</Link> {new Date().getFullYear()}</p>
        </FooterContainer>
    )


export default Footer;