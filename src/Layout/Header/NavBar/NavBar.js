import React from "react";
import SubMenu from "./SubMenu/SubMenu";

const NavBar = ({links}) => (
    <nav>
        <ul>
            {
                links.map(link => (
                    <li key={link.id}>
                        <a href={link.url} target={link.openInNewTab ? "_blank" : "_self"} rel='noreferrer'>
                            {link.title}
                        </a>
                        {
                            link.treeChildren.length > 0 && <SubMenu subMenuItems={link.treeChildren}/>
                        }
                    </li>
                ))
            }
        </ul>
    </nav>
)

export default NavBar