import React from "react";

const SubMenu = ({subMenuItems}) => (
    <ul>
        {
            subMenuItems.map(item => (
                <li>
                    <a href={item.url} target={item.openInNewTab ? "_blank" : "_self"}>
                        {item.title}
                    </a>
                </li>
            ))
        }
    </ul>
)

export default SubMenu