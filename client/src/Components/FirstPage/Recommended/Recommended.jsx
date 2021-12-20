import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./recommended.css";
import { BsBookmark, BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

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
			<p className="rec-si-cng">Recommended for you</p>
			{get.map((d, i) => {
				return (
					<div className="recomended-cont-box" key={i} style={element}>
						<div>
							<img src={d.coverImage} alt="image" style={image} />
						</div>
						<div className="recommended-data">
							<p className="recommend-name">{d.projectName}</p>
							<p className="recommend-fund">
								{Math.floor(Math.random() * 1000)}% funded
							</p>
							<p className="recommend-creator">
								by <span className="recommend-creator-span">{d.creator}</span>
							</p>
							<div className="like-dislike">
								<img id="book111" className="book000" src="images/book.svg" />
								{/* <span id="remindMe" className="hovertext">Remind me</span> */}

								<img id="book222" className="book000" src="images/like.svg" />
								{/* <span id="liked" className="hovertext">More like this</span> */}

								<img
									id="book333"
									className="book000"
									src="images/dislike.svg"
								/>
								{/* <span id="disliked" className="hovertext">Less like this</span> */}
								{/* <span className="book123">
									<BsBookmark />
								</span>
								<span className="book123">
									<BsHandThumbsUp />
								</span>
								<span className="book123">
									<BsHandThumbsDown />
								</span> */}
							</div>
						</div>
					</div>
				);
			})}
			{/* <BasicPagination setPage={setPage} page={page}></BasicPagination> */}
			<Pagination
				count={3}
				style={{ margin: "12% 33%" }}
				onChange={(event, value) => setPage(value)}
			/>
		</div>
	);
}
