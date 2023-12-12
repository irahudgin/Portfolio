import React from "react";

function Skills() {
    return (
        <div className="projectMain skillsMain">
            <div className="gridContainer skillsContainer">
                <div className="projectBackground1 skillsBackground"></div>
                <div className="skillsBox sk3">
                    <div className="skillsMeter">
                        <div className="skillsBars">
                            <div className="java skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill">JAVA</p>
                                </div>
                            </div>
                            <div className="csharp skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill">C#</p>
                                </div>
                            </div>
                            <div className="javascript skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill">JAVASCRIPT</p>
                                </div>
                            </div>
                            <div className="html skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill">HTML + CSS</p>
                                </div>
                            </div>
                            <div className="wordpress skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill">WORDPRESS</p>
                                </div>
                            </div>
                            <div className="react skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill">REACT</p>
                                </div>
                            </div>
                            <div className="python skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill">PYTHON</p>
                                </div>
                            </div>
                            <div className="sql skillMeter">
                                <div className="skillp skillLabel">
                                    <p className="labelSkill"> POSTGRESQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skillsBox sk4">
                    <h2 className="skillsSubtitle">Skills &#8623;</h2>
                </div>
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
                ></div>{" "}
            </div>
        </div>
    );
}

export default Skills;
