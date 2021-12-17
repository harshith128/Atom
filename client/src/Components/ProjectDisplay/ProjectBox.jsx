import "./projectBox.css"

export const ProjectBox = ({ele}) => {
    return (
        <div className="project-box">
            <div className="project-cover">
                <img src={ele.coverImage} alt="Project cover" />
            </div>
            <div className="project-bar">
                <div className="project-fill-bar" style={{width: `${Math.floor(Math.random() * 100) + 1}%` }}></div>
            </div>
            <h3 className="projectName">{ ele.projectName }</h3>
            <p className="projectDes">{ ele.description }</p>
            <p className="projectCreator">By { ele.creator }</p>
        </div>
    )
}