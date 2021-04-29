import React from "react";

const TitledSection = ({title, children}) => {
	
	return(
		<section>
			<h2>{title}</h2>
			{children}
		</section>
	)
}



export default  TitledSection