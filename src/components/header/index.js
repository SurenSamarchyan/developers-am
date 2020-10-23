import React from "react";
import useNavLinks from "../../hooks/use-nav-links";
import Navbar from "./navbar";

const Index = () => {
    const links = useNavLinks();

    return (
        <header>
            <Navbar links={links}/>
            Header
        </header>
    )
}

export default Index

