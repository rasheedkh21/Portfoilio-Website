import aboute from "../../assets/coveredme.jpg"


export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboute}/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a 20 years old Fronted Developer.
          </p>
          <p className="hero--section-description">
            Student of DSU.  Eager to Learn new technologies.
            Foreigner in South Korea.
          </p>
        </div>
      </div>
    </section>
  );
}
