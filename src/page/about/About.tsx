import profile from "../../profile.jpeg";
import github from "../../github.png";
import linkedin from "../../linkedin.png";
import gmail from "../../gmail.png";
import "./style.css";

export default function About() {
  return (
    <>
      <div className="info">
        <img src={profile} alt="" className="profile" />

        <div className="content-about">
          <h1>Hi, my name is Gabriel</h1>

          <p>
            Gabriel Stainhaus is a developer focused on creating innovative and
            practical digital solutions. He is involved in various projects
            aimed at improving user experience and optimizing processes through
            technology. With a strong interest in web and mobile applications,
            Gabriel consistently seeks to integrate efficient functionalities
            that enhance usability and streamline tasks. Balancing his work with
            his studies, he collaborates with partners to develop systems that
            meet real-world needs while advancing his skills in modern
            development tools and frameworks.
          </p>
        </div>
      </div>
      <div className="contact">
        <h2>Contact with me</h2>
        <ul className="contacts">
          <div className="github">
            <a href="https://github.com/GabrielSS04" target="_blank">
              <img src={github} alt="github" className="icons" />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/gabrielss04/" target="_blank">
              <img src={linkedin} alt="linkedin" className="icons" />
            </a>
          </div>
          <div className="gmail">
            <a href="mailto: gssouzasoftware@gmail.com" target="_blank">
              <img src={gmail} alt="gmail" className="icons" />
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}
