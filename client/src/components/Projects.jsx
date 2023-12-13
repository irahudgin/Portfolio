import React from "react";
import { useState, useEffect } from "react";
import projects from "../data";
import Project from "./Project";

function Projects() {
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch(
                "https://api.github.com/users/irahudgin/repos"
            );
            const data = await res.json();
            const indices = [0, 5, 19];
            const selectedProjects = indices.map((ind) => data[ind]);
            setProject(selectedProjects);
        }
        fetchProjects();
    }, []);

    const projectList = project.map((project, i) => {
        return (
            <Project
                key={project.id}
                projectNumber={"" + (i + 1)}
                data={project}
            />
        );
    });

    let loaded = false;
    project.length > 0 ? (loaded = true) : (loaded = false);
    return (
        <div className="projectMain">
            <div className="gridContainer">
                <div className="testbox">
                    <h2>Projects &#8623;</h2>
                </div>
                <div className="projectBackground1"></div>
                <div className="projectBackground2"></div>
                <div className="projectBackground3"></div>
                <div className="projectBackground4"></div>
                {loaded ? projectList : <p>loading</p>}
                <Project projectNumber="4" data={projects[0]} />
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
