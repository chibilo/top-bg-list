import React from "react";
import "./CustomDropDown.css";

export default ({ value, items, onChange }) => {
	return (
		<div className="custom-dropdown">
			{value}
			<ul className="custom-dropdown-menu">
				{items.map((val, idx) => (
					<li
						key={idx}
						onClick={() => {
							onChange(val.value ?? val);
						}}
					>
						{val.text ?? val}
					</li>
				))}
			</ul>
		</div>
	);
};
