import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact(props) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_lop6snk",
                "template_7coplgs",
                form.current,
                "MpXKdXVUP_-XaFBt-"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setEmail("");
                    setMessage("");
                    alert(
                        "I got your email, thanks for reaching out to me. I'll get back to you soon"
                    );
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contactMain">
            <div className="contactTop">
                <div className="topBar contactBar">
                    <div className="topBarComponent"></div>
                    <div className="topBarComponent"></div>
                    <div className="topBarComponent"></div>
                    <div className="topBarComponent right"></div>
                </div>
            </div>
            <div className="formAndPicture">
                <div className="myForm">
                    <div className="contactTitleBox">
                        <h1>{props.lang.contact.title}</h1>
                    </div>
                    <div className="formContainer">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li>
                                    <label>{props.lang.contact.email}:</label>
                                    <input
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        type="email"
                                        id="mail"
                                        name="user_email"
                                    />
                                </li>
                                <li>
                                    <label>{props.lang.contact.message}:</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                        }}
                                        id="msg"
                                        name="user_message"
                                    ></textarea>
                                </li>
                                <li className="button">
                                    <button type="submit">
                                        {props.lang.contact.submit}
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="myPicture"></div>
            </div>
            <div className="contactBottom">
                <div className="topBar contactBarBottom">
                    <div className="topBarComponent">
                        <div className="barComponent1">
                            <p className="heroP coords">Ira Hudgin</p>
                            <div className="socials">
                                <p className="heroP coords">Linked In</p>
                                <p className="heroP coords">GitHub</p>
                                <p className="heroP coords">@irahudgin</p>
                            </div>
                        </div>
                    </div>
                    <div className="topBarComponent">
                        <p className="heroP coords">Made with React</p>
                    </div>
                    <div className="topBarComponent"></div>
                    <div className="topBarComponent right"></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
