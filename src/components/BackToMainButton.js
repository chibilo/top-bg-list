import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BackToMainButton = ({ children, ...props }) => {
	let history = useHistory();
	return (
		<Button {...props} onClick={() => history.push("/")}>
			{children}
		</Button>
	);
};

export default BackToMainButton;
