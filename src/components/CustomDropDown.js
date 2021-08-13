import React from "react";

export default ({ value, items, onChange }) => {
  return (
    <div className="custom-dropdown">
      {value}
      <ul className="custom-dropdown-menu">
        {items.map((val, idx) => (
          <li
            key={idx}
            onClick={(e) => {
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
