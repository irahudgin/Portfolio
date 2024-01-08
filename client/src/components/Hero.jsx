import React from "react";

function Hero(props) {
    return (
        <div className="heroContainer">
            <div>
                <div className="topBar">
                    <div className="topBarComponent">
                        <p className="heroP">{props.lang.hero.title}</p>
                    </div>
                    <div className="topBarComponent"></div>
                    <div className="topBarComponent">
                        <p className="heroP coords">
                            {props.lang.hero.location}
                        </p>
                    </div>
                    <div className="topBarComponent right"></div>
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
                                <img src="./images/github-mark/github-mark-white.png" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ira-hudgin/"
                                target="_blank"
                            >
                                <img src="./images/LinkedIn-Logos/LI-In-Bug.png" />
                            </a>
                            <a href="./ira_resume.pdf" target="_blank">
                                <img src="./images/CV.png" />
                            </a>
                            <a
                                href="https://www.instagram.com/irahudgin/"
                                target="_blank"
                            >
                                <img src="./images/instagramIcon.png" />
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
                    <p>{props.lang.hero.about1}</p>
                    <hr></hr>
                    <br></br>
                    <p>{props.lang.hero.about2}</p>
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
