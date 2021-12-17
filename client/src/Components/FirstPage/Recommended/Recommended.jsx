import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicPagination from "./Pagination";

export default function Recommended() {
	const [get, setGet] = useState([]);
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(3);
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://localhost:2357/projects/random");
			setGet(res.data.projects);
		};
		fetchData();
	}, []);
	// console.log(get);
	const outer = {
		position: "relative",
		left: "4%",
		width: "50%",
		marginTop: "10.5%",
	};
	const element = {
		display: "flex",
		boxShadow: "0px 1px 0px rgba(163, 163, 163, 0.25)",
		marginBottom: "2%",
		width: "480px"
	};
	const image = {
		width: "168px",
	};

	const indexOfLastPage = page * perPage;
	const indexOfFirstPage = indexOfLastPage - perPage;
	const current = get.slice(indexOfFirstPage, indexOfLastPage);
	const paginate = (number)=> setPage(number)
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
			{current.map((d) => {
				return (
					<div key={"d.id"} style={element}>
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
			<BasicPagination perPage={perPage} paginate={paginate}></BasicPagination>
		</div>
	);
}
