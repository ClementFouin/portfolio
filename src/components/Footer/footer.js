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
            <div className={"link-container"}>
                <a href="https://fr.linkedin.com/in/clément-fouin"><img src={GithubSVG} height={20} alt="Linkedin icon"/></a>
                <a href="https://github.com/ClementFouin"><img src={LinkedinSVG} height={20} alt="GitHub icon"/></a>
                <div className={"contact-link-container"}>
                    <a href={`mailto:${email}`} className={"contact-link"}><img src={MailSVG} height={15} alt="Linkedin icon"/>{email}</a>
                    <a href={`tel:${phone}`} className={"contact-link"}><img src={PhoneSVG} height={15} alt="Linkedin icon"/>{phone}</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;