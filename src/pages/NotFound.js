import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function NotFound() {
	let history = useHistory();
	useEffect(() => {
		setTimeout(() => history.push("/"), 2000);
	}, []);
	return (
		<div>
			<h3>Page not found. Redirecting to main page...</h3>
		</div>
	);
}
