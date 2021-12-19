import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ThirdPage = () => {
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
        <section>
            
        </section>
    )
}