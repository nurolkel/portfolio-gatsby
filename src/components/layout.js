import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import GlobalStyle from "../styles/GlobalStyles";

const Layout = ({ children }) => (
    <>
      <GlobalStyle />
      <Navbar />
        {children}
      <Footer />
    </>
);




export default Layout;
