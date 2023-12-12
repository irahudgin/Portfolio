import React from "react";

function Contact() {
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
                        <h1>Send me a message!</h1>
                    </div>
                    <div className="formContainer">
                        <form action="/" method="post">
                            <ul>
                                <li>
                                    <label htmlFor="mail">Email:</label>
                                    <input
                                        type="email"
                                        id="mail"
                                        name="user_email"
                                    />
                                </li>
                                <li>
                                    <label htmlFor="msg">Message:</label>
                                    <textarea
                                        id="msg"
                                        name="user_message"
                                    ></textarea>
                                </li>
                                <li className="button">
                                    <button type="submit">
                                        Send your message
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
