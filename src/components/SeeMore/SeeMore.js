import React from "react";
import {Link} from "gatsby";

const SeeMore = (link, text) => {
    return(
        <Link to={link}>{text}</Link>
    )
}

export default SeeMore