import axios from "axios";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import "./explore.css";
import { Link } from "react-router-dom";

export const Explore = ({ subCategory, category }) => {
	const [subCategorydata, setSubCategoryData] = useState([]);
	const [active, setActive] = useState(subCategory[0]);

	const getData = async () => {
		const res = await axios(
			"http://localhost:2357/projects/subcategory?subcategory=Tabletop Games"
		);
		console.log(active);
		setSubCategoryData(res.data.projects);
	};

	const handleSubCategory = (sunCat) => {
		setActive(sunCat);
	};

	useEffect(() => {
		getData();
	}, [active]);

	return (
		<section className="explore-section">
			<div className="explore-head">
				<h2>Explore {category}</h2>
				<p>Discover more</p>
			</div>
			<div className="content">
				<div>
					<Stack spacing={2} direction="column">
						{subCategory.map((ele, i) => {
							return (
								<button
									key={i}
									onClick={() => {
										handleSubCategory(ele);
									}}
									className={active === ele ? "active" : "subcat"}
								>
									{ele}
								</button>
							);
						})}
					</Stack>
				</div>
				{subCategorydata.map((ele, i) => {
					return (
						<div className="subCat-pro" key={i}>
							<div className="cover">
								<img src={ele.coverImage} alt="Project cover" />
							</div>
							<div className="bar-explore">
								<div
									className="fill-bar"
									style={{ width: `${Math.floor(Math.random() * 100) + 1}%` }}
								></div>
							</div>
							<h3 className="pro-head">{ele.projectName}</h3>
							<p className="pro-name">{ele.description}</p>
							<p className="pro-des">By {ele.creator}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
