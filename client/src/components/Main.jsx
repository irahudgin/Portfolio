import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import languages from "../langData.js";

function Main() {
    const [language, setLanguage] = useState("English");
    const [data, setData] = useState(languages[0].English);

    let arrow = "\u{2190}";
    function handleClick(e) {
        let language = e.target.innerText;
        if (language.split(" ")[0] === "English") {
            setLanguage("English");
            let langChosen = e.target.innerText.split(" ")[0];
            let langNotChosen = e.target.nextSibling.innerText.split(" ")[0];
            e.target.innerText = `${langChosen} ${arrow}`;
            e.target.nextSibling.innerText = `${langNotChosen}`;
        } else {
            setLanguage("French");
            let langChosen = e.target.innerText.split(" ")[0];
            let langNotChosen =
                e.target.previousSibling.innerText.split(" ")[0];
            e.target.innerText = `${langChosen} ${arrow}`;
            e.target.previousSibling.innerText = `${langNotChosen}`;
        }
    }

    useEffect(() => {
        if (language === "English") {
            setData(languages[0].English);
        } else {
            setData(languages[0].French);
        }
    }, [language]);

    return (
        <div className="first">
            <div className="languages">
                <a className="heroP coords lang" onClick={handleClick}>
                    English {`${arrow}`}
                </a>
                <a className="heroP coords lang" onClick={handleClick}>
                    French
                </a>
            </div>
            <Hero lang={data} />
            <Projects lang={data} />
            <Skills lang={data} />
            <Contact lang={data} />
        </div>
    );
}

export default Main;
