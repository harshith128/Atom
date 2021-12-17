import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectBox } from "./ProjectBox";
import "./displaySideScroll.css";

export const DisplayProjects = () => {
    const [displayData, setDisplayData] = useState([]);

    const getDisplayData = async() => {
        const res = await axios("http://localhost:2357/projects/discovermore");
        // console.log(res.data.projects);
        setDisplayData(res.data.projects);
    }

    useEffect(() => {
        getDisplayData()
    }, []);

    return (
        <section>
            <div className="carousel-cont">
            {
                    displayData.map((ele, i) => {
                        return (
                            <div key={i}>
                                <ProjectBox ele={ele} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}