import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

export default function Recommended() {
	const [get, setGet] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			// const res = await axios.get(`http://localhost:2357/projects/random?_page=${page}&_limit=2`);
			const res = await fetch(
				`http://localhost:2357/projects/recommended?page=${page}`
			).then((d) => d.json());
			setGet(res.projects);
		};
		fetchData();
	}, [page]);
	console.log("get:", get.projects);
	const outer = {
		position: "relative",
		left: "4%",
		width: "50%",
		marginTop: "14.5%",
	};
	const element = {
		display: "flex",
		boxShadow: "0px 1px 0px rgba(163, 163, 163, 0.25)",
		marginBottom: "2%",
		width: "480px",
	};
	const image = {
		width: "168px",
	};

	// const indexOfLastPage = page * perPage;
	// const indexOfFirstPage = indexOfLastPage - perPage;
	// const current = get.slice(indexOfFirstPage, indexOfLastPage);
	// const paginate = (number)=> setPage(number)
	return (
		<div style={outer}>
			<p
				style={{
					marginTop: "0.7rem",
					marginLeft: "1%",
					textAlign: "left",
					fontWeight: 500,
				}}
			>
				RECOMMENDED FOR YOU
			</p>
			{get.map((d, i) => {
				return (
					<div key={i} style={element}>
						<div>
							<img src={d.coverImage} alt="" style={image} />
						</div>
						<div>
							<p>{d.projectName}</p>
							<p>{Math.floor(Math.random() * 1000)}%</p>
							<p>{d.creator}</p>
						</div>
					</div>
				);
			})}
			{/* <BasicPagination setPage={setPage} page={page}></BasicPagination> */}
			<Pagination count={3} style={{ margin: "12% 33%" }} onChange={(event, value) => setPage(value)} />
		</div>
	);
}
