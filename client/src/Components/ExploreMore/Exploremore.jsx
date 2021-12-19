
import { useEffect, useState } from "react";
import axios from "axios";
import "./Exploremore.css";
import { Link } from "react-router-dom";

export const Exploremore = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [displaydata, setDisplaydata] = useState([]);


    const getData = async () => {
		const res = await axios(
			"http://localhost:2357/products"
		);
		console.log(res.data.product);
		setDisplaydata(res.data.product);
	};

    useEffect(() => {
        getData()
    }, []);


    return (
        <div>
        <div className="containter">
            <div className="exploreSection">
                <div className="text">Show me</div>
                <div className="dropdown">
                    <button className="btn" onClick={()=> {setShow1(!show1); setShow2(false); setShow3(false)}}>
                        Design <img src="images/Vector.jpg" alt="" className="arrow" />
                    </button>
                </div>
                <div className="text">Projects on</div>
                <div className="dropdown">
                    <button className="btn" onClick={()=> {setShow2(!show2); setShow3(false); setShow1(false) }}>
                        Earth <img src="images/Vector.jpg" alt="" className="arrow" />
                    </button>
                </div>
                <div className="text">Sorted by</div>
                <div className="dropdown">
                    <button className="btn" onClick={()=> {setShow3(!show3); setShow2(false); setShow1(false) }}>
                        Magic <img src="images/Vector.jpg" alt="" className="arrow" />
                    </button>
                </div>
            </div>
            <div className="filters">More Filters</div>
        </div>
        <hr />
        <div className="cat-cont">
           {
               displaydata.map((ele, i) => {
                   return (
                    <div key={i} className="display-data">
                    <img className="image-cover" src={ele.coverImage} alt="image" />
                     <h3 className="">{ele.productName}</h3>
                     <p className="">{ele.description}</p>
                     <p className="">By {ele.creator}</p>
                     <div className="">
                         <div
                             className=""
                             style={{ width: `${Math.floor(Math.random() * 100) + 1}%` }}
                         ></div>
                     </div>
                     <p>${Math.floor(Math.random() * 100) + 1}</p>
                     <p>{Math.floor(Math.random() * 100) + 1}% funded</p>
                     <p>{Math.floor(Math.random() * 50) + 10} days to go</p>
                     <p><span>{ele.subcategory[0]}</span><span>{ele.location}</span></p>
                </div>
                   )
               })
           }
        </div>
        </div>
    )
} 