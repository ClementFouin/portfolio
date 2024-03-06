import React from 'react';
import "./footer.css"
import GithubSVG from "../../assets/footer/githubIcon.svg"
import LinkedinSVG from "../../assets/footer/linkedinIcon.svg"
import PhoneSVG from "../../assets/footer/phone.svg"
import MailSVG from "../../assets/footer/mail.svg"

function Footer(props) {
    const email = "fouin.clement@gmail.com"
    const phone = "+33 6 01 29 18 60"
    return (
        <div className={"footer-container"}>
            <p className={"copyright"}>© 2024 Clément Fouin</p>
            <div className={"link-container"}>
                <a href="https://github.com/ClementFouin" rel={"noreferrer"} target="_blank"><img src={GithubSVG}
                                                                                                  height={25}
                                                                                                  alt="GitHub icon"/></a>
                <a href="https://fr.linkedin.com/in/clément-fouin" rel={"noreferrer"} target="_blank"><img
                    src={LinkedinSVG} height={25}
                    alt="Linkedin icon"/></a>
                <div className={"contact-link-container"}>
                    <a href={`mailto:${email}`} className={"contact-link"}><img src={MailSVG} height={15}
                                                                                alt="Mail icon"/>{email}</a>
                    <a href={`tel:${phone}`} className={"contact-link"}><img src={PhoneSVG} height={15}
                                                                             alt="Phone icon"/>{phone}</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;