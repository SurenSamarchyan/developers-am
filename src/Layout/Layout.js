import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {GlobalStyles} from "../styles/globalStyles";

const Layout = ({children}) => {
	return (
		<>
			<GlobalStyles/>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</>
	)
};

export default Layout;
