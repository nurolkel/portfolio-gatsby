import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { breakpoints } from "../utils/breakpoints";




const Footer = () => {
    return (
        <div>
            <p>&copy; <Link to ="/" aria-label="Kelvin Nunez Portfolio">Kelvin Nunez</Link> {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;