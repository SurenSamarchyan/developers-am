import React from "react";
import useNavLinks from "../../hooks/use-nav-links";
import Navbar from "./NavBar/NavBar";
import Logo from "../../images/Logo";
const Header = () => {
    
    const links = useNavLinks();

    return (
        <header>
            <Logo/>
            <Navbar links={links}/>
            Header
        </header>
    )
}
 
export default Header

