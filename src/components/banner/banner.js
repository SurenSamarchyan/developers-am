import React from "react";
import styled from "styled-components"

const BannerBlock = ({bgImage, title, subtitle}) => {
	
	const Banner = styled.div`
      background-image: url(${bgImage.fluid.src})`
	
	return (
		<Banner>
			<p>{subtitle}</p>
			<h1>{title}</h1>
		</Banner>)
}

export default BannerBlock