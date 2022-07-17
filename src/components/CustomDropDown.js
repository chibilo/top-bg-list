import React, { memo } from "react";
import "./CustomDropDown.css";

export default memo(({ value, items, onChange }) => {
	return (
		<div className="custom-dropdown">
			{value}
			<ul className="custom-dropdown-menu">
				{items.map((val, idx) => (
					<li
						key={idx}
						onClick={() => {
							const newValue = val.value ?? val;
							if (newValue !== value) onChange(newValue);
						}}
					>
						{val.text ?? val}
					</li>
				))}
			</ul>
		</div>
	);
});
