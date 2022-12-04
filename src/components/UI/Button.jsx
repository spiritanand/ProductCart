import React from "react";

function Button({
				  onClick,
				  children,
				  disabled,
				  className
				}) {
  return (
	<button onClick = {onClick}
			className = {`btn ${className}`}
			disabled = {disabled}
	>
	  {children}
	</button>
  );
}

export default Button;