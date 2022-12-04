import React from "react";
import {BallTriangle} from "react-loader-spinner";

function Loader({classname}) {
  return (
	<div className={`${classname} loader`}>
	<BallTriangle
	  height = {100}
	  width = {100}
	  radius = {5}
	  color = "#FE525EFF"
	  ariaLabel = "ball-triangle-loading"
	  visible = {true}
	/>
	</div>
  );
}

export default Loader;