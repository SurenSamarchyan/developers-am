import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({children}) => {
    return (
        <>
            <Header>
            </Header>
            <main>{children}</main>
            <Footer/>
        </>
    )
};

export default Layout;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
