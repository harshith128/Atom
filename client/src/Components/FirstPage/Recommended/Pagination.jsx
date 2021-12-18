// import React from 'react'
import "./pagination.css";

// export default function Pagination({ perPage, Total }) {

//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(Total / perPage); i++){
//         pageNumbers.push(i);
//     }
//     return (
//         <div>

//         </div>
//     )
// }

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ page }) {

	return (
		<Stack spacing={2}>
            <Pagination
				count={page}
				onChange={handleChange }
				style={{ margin: "23% 33%" }}
			/>
		</Stack>
	);
}
