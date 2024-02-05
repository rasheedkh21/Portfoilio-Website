import img from "../../assets/standingme.jpg"
import CV from "./cv";


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rasheed</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am an international student and Fronted developer in South Korea
            <br /> Who is able to work in different platforms
          </p>
        </div>
        <CV/>
      </div>
      <div className="hero--section--img">
        <img src={img} alt="Hero Section" />
      </div>
    </section>
  );
}
