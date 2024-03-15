import React from "react";
import { useState, useEffect } from "react";
import projects from "../data";
import Project from "./Project";

function Projects(props) {
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch(
                "https://api.github.com/users/irahudgin/repos"
            );
            const data = await res.json();
            // console.log(data);
            const indices = [0, 5];
            const selectedProjects = indices.map((ind) => data[ind]);
            setProject(selectedProjects);
        }
        fetchProjects();
    }, []);

    // const projectList = project.map((project, i) => {
    //     return (
    //         <Project
    //             key={project.id}
    //             projectNumber={"" + (i + 1)}
    //             data={project}
    //         />
    //     );
    // });

    // let loaded = false;
    // project.length > 0 ? (loaded = true) : (loaded = false);
    return (
        <div className="projectMain">
            <div className="gridContainer">
                <div className="testbox">
                    <h2>{props.lang.projects.title} &#8623;</h2>
                </div>
                <div className="projectBackground1"></div>
                <div className="projectBackground2"></div>
                <div className="projectBackground3"></div>
                <div className="projectBackground4"></div>
                {/* {loaded ? projectList : <p>loading</p>} */}
                {props.language == "English" ? (
                    <>
                        <Project
                            projectNumber="1"
                            data={projects[0].English[1]}
                        />
                        <Project
                            projectNumber="2"
                            data={projects[0].English[2]}
                        />
                        <Project
                            projectNumber="3"
                            data={projects[0].English[3]}
                        />
                        <Project
                            projectNumber="4"
                            data={projects[0].English[0]}
                        />
                    </>
                ) : (
                    <>
                        <Project
                            projectNumber="1"
                            data={projects[0].French[1]}
                        />
                        <Project
                            projectNumber="2"
                            data={projects[0].French[2]}
                        />
                        <Project
                            projectNumber="3"
                            data={projects[0].French[3]}
                        />
                        <Project
                            projectNumber="4"
                            data={projects[0].French[0]}
                        />
                    </>
                )}

                <div
                    className="gridContainerBox"
                    style={{ gridColumn: "1" }}
                ></div>
                <div
                    className="gridContainerBox"
                    style={{ gridColumn: "2" }}
                ></div>
                <div
                    className="gridContainerBox"
                    style={{ gridColumn: "3" }}
                ></div>
                <div
                    className="gridContainerBox"
                    style={{ gridColumn: "4" }}
                ></div>
            </div>
        </div>
    );
}

export default Projects;
