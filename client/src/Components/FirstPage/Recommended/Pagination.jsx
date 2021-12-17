// import React from 'react'

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

export default function BasicPagination({ perPage, paginate }) {
	return (
		<Stack spacing={2}>
			<Pagination
				count={perPage}
				onChange={() => paginate(perPage)}
				style={{ margin: "2% 8%" }}
			/>
			{/* <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled /> */}
		</Stack>
	);
}
