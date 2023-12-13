import React from "react";

function Project(props) {
    const topics = props.data.topics.map((topic) => {
        return <span>{topic}</span>;
    });
    return (
        <div className={"projectTest" + props.projectNumber}>
            <a href={props.data.html_url} target="_blank" className="project1">
                <div className="projectHeader">
                    <div className="projectNumber">
                        <p>0{props.projectNumber}</p>
                    </div>
                    <h2>{props.data.name}</h2>
                </div>

                <div className="projectBody">
                    <p>{props.data.description}</p>
                    <div className="spansContainer">{topics}</div>
                </div>
            </a>
        </div>
    );
}

export default Project;
