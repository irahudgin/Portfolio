import React from "react";

function Hero() {
    return (
        <div className="heroContainer">
            <div>
                <div className="topBar">
                    <div className="topBarComponent">
                        <p className="heroP">Full Stack Developer</p>
                    </div>
                    <div className="topBarComponent"></div>
                    <div className="topBarComponent">
                        <p className="heroP coords">Quebec City</p>
                    </div>
                    <div className="topBarComponent right">
                        <a className="heroP coords lang">English</a>
                        <a className="heroP coords lang">French</a>
                    </div>
                </div>
                <div className="nameAndOthers">
                    <div className="font-face-nm box irahudgin">
                        <h1>Ira Hudgin</h1>
                        <div className="iraBackground ibg1">
                            <p>yoyoy</p>
                        </div>
                        <div className="iraBackground ibg2">
                            <p>yoyoy</p>
                        </div>
                        <div className="socialsLinks">
                            <a
                                href="https://github.com/irahudgin"
                                target="_blank"
                            >
                                <img src="/images/github-mark/github-mark-white.png" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ira-hudgin/"
                                target="_blank"
                            >
                                <img src="/images/LinkedIn-Logos/LI-In-Bug.png" />
                            </a>
                            <a href="/ira_resume.pdf" target="_blank">
                                <img src="/images/CV.png" />
                            </a>
                            <a
                                href="https://www.instagram.com/irahudgin/"
                                target="_blank"
                            >
                                <img src="/images/instagramIcon.png" />
                            </a>
                        </div>
                    </div>
                    <div className="box"></div>
                    <div className="box">
                        <p className="heroP coords real">
                            46.801422, -71.226952
                        </p>
                    </div>
                    <div className="box"></div>
                </div>
            </div>
            <div className="about">
                <div className="aboutWrapper">
                    <p>
                        Hi, I'm Ira. I'm a full stack developer based in Quebec
                        City. Currently I am focused on building up my personal
                        projects, completing my education in the software
                        development program at Vanier College, and searching for
                        employment opportunities.
                    </p>
                    <hr></hr>
                    <br></br>
                    <p>
                        I love design, photography, coding, fitness, guitar,
                        mountain biking, and snowboarding.
                    </p>
                    <div className="topBar bottomBar">
                        <div className="topBarComponent"></div>
                        <div className="topBarComponent"></div>
                        <div className="topBarComponent"></div>
                        <div className="topBarComponent right"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
