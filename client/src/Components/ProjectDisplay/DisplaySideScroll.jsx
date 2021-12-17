import { useEffect, useState } from "react";
import axios from "axios";

export const DisplayProjects = () => {
    const [displayData, setDisplayData] = useState([]);

    const getDisplayData = async() => {
        const res = await axios("http://localhost:2357/projects");
        console.log(res.data.projects);
        setDisplayData(res.data.projects);
    }

    useEffect(() => {
        getDisplayData()
    }, []);

    return (
        <section>
            <div>
            {
                    displayData.map((ele, i) => {
                        return (
                            <div className="subCat-pro" key={i}>
                                <div className="cover">
                                    <img src={ele.coverImage} alt="Project cover" />
                                </div>
                                <div className="bar-explore">
                                    <div className="fill-bar" style={{width: `${Math.floor(Math.random() * 100) + 1}%` }}></div>
                                </div>
                                <h3 className="pro-head">{ ele.projectName }</h3>
                                <p className="pro-name">{ ele.description }</p>
                                <p className="pro-des">By { ele.creator }</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}