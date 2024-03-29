import { Pagination } from "react-bootstrap";
import React, { memo } from "react";
import "./CustomPagination.css";

export default memo(({ pageCount, activePage, onChangePage }) => {
	return (
		<Pagination>
			{Array.from(Array(pageCount).keys()).map((num, idx) => (
				<Pagination.Item
					key={idx}
					active={activePage === num + 1}
					onClick={(e) => {
						const page = Number(e.target.text || activePage);
						onChangePage(page);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					{num + 1}
				</Pagination.Item>
			))}
		</Pagination>
	);
});
