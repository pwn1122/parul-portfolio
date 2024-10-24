import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  function homePage() {
    setShowMenu(false);
  }
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let mm = Math.floor(Math.log10(m) + 1);
  m = mm == 1 ? "0" + m : m;

  const skills = [
    { icon: "★", lang: "Typography" },
    { icon: "★", lang: "Color Theory" },
    { icon: "★", lang: "Photo Editing Software" },
    { icon: "★", lang: "Creativity" },
  ];
  const project = [

    {
      img: "himalya.jpg",
      title: "Himalaya",
      date: "22 October 2024",
      link : "https://www.pacdora.com/share?filter_url=pstc4fjxd0"
    },
    {
      img: "aalu.jpg",
      title: "Aalo Bhujia 3D Packing",
      date: "24 October 2024",
      link : "https://www.pacdora.com/share?filter_url=ps2rgic0om"
    },
    {
      img: "lays.jpg",
      title: "Lays 3D Packing",
      date: "25 October 2024",
      link : "https://www.pacdora.com/share?filter_url=psg8ulmgfu"
    },
    {
      img: "ritvik.jpg",
      title: "Ritvik Soni Web Developer",
      date: "20 October 2024",
    },
    {
      img: "4.jpg",
      title: "Quick Makeover",
      date: "26 September 2024",
    }, 
    {
      img: "6.jpg",
      title: "Fanta - Orange",
      date: "28 September 2024",
    },
    {
      img: "1.jpg",
      title: "Coffee-Pea",
      date: "20 September 2024",
    },
    {
      img: "2.jpg",
      title: "Digital Marketing ",
      date: "22 September 2024",
    },
    {
      img: "3.jpg",
      title: "Navratri Special",
      date: "24 September 2024",
    },
    
    
  
    {
      img: "gandhi.jpg",
      title: "Gandhi Jayanti",
      date: "2 October 2024",
    },
    {
      img: "flying.jpg",
      title: "Flying Diamonds PTE / VISA / DIGITAL MARKETING",
      date: "4 October 2024",
    },
    {
      img: "alisha.jpg",
      title: "Alisha Makeover",
      date: "6 October 2024",
    },
    {
      img: "madan.jpg",
      title: "Madan Infotech",
      date: "8 October 2024",
    },
    {
      img: "dushera.jpg",
      title: "Happy Dussehra",
      date: "12 October 2024",
    },
    {
      img: "oreo.jpg",
      title: "Milk's Favourite Cookie Oreo",
      date: "14 October 2024",
    },
    {
      img: "pepsi.jpg",
      title: "Cool-Cool Pepsi",
      date: "16 October 2024",
    },
    
    {
      img: "google.jpg",
      title: "Start Your Business",
      date: "22 October 2024",
    },
    
    

  ];
  return (
    <>
      {showMenu ? (
        <main className="container">
          <nav className="navbar">
            <h2>Parul Hudda</h2>
            <div style={{ cursor: "pointer" }} onClick={homePage}>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <span className="time">
              {h}:{m}
            </span>
          </nav>
          <section className="section">
            <div className="front-end">
              <div className="dev front">Graphic</div>
              <div className="line2 developer"></div>
              <div className="dev end">Designer</div>
            </div>
            <main className="main-heading">
              <div className="main-div front">
                <span className="hey">Hey <span className="there">There,</span></span>
                 <br />
                <span className="im">I'M</span> <br />
                <span className="parul">Parul Hudda</span>
              </div>
              <div className="end">
                <img src="/img/parul-logo.jpg" alt="" />
              </div>
            </main>
          </section>
          <div className="logo-text">
            <img
              className="logo-img"
              src="/logo/main-logo.jpg"
              alt=""
              height={150}
              width={150}
            />
            <div className="lets-talk">
              <p>Available For Freelance</p>
              <p>Work From Sep '25</p>
              <p>
                <a href="mailto:huddaparul174@gmail.com">LETS TALK</a>
              </p>
            </div>
          </div>
        </main>
      ) : (
        <>
          <HomePage setShowMenu={setShowMenu} />
        </>
      )}
      <article>
        <h1>ABOUT ME</h1>
        <p>
        Hello, I’m Parul Hudda, a graphic designer with a passion for creating meaningful designs that make a lasting impact <br />
        As a graphic designer, I strive to create designs that are not only visually appealing but also communicate a message effectively. <br />
        I have worked with clients from various sectors, such as fashion, food, and education.<br />
        My areas of expertise include logo design, print design, and web design. <br />
          ranging from websites to Web-Apps <br />
          I take pride in my ability to deliver projects on time and on budget, while maintaining the highest standards of quality.
          <br />

        </p>
      </article>
      <section className="ribbon-box">
        <p>Various Technologies i use</p>
        <div className="ribbon ribbon1">
          <div className="run">
            {skills.map((s) => {
              return (
                <div key={Math.random()}>
                  <span>{s.icon}</span>
                  <span>{s.lang}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ribbon ribbon2">
          <div className="back">
            {skills.map((s) => {
              return (
                <div key={Math.random()}>
                  <span>{s.icon}</span>
                  <span>{s.lang}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="project-section">
        <h1>PROJECTS</h1>
        <p className="pro-intro">
          Most of time is spent building Graphic products that i either find
          interesting or paid to do. Some of these projects are open source, so
          feel free to explore them and even contribute. Feel free to get in
          touch with me if you have any cool ideas that you'd like to discuss
          further or work on with me.
        </p>
        <main className="proj-grid project">
          {project.map((pro, i) => {
            return (
              <Link key={Math.random()} to={pro.link}>
                <div>
                  <img
                    src={`/img/${pro.img}`}
                    alt=""
                    height={"100%"}
                    width={"100%"}
                  />
                  <h3 name={i}>{pro.title}</h3>
                  <p name={i}>{pro.lang}</p>
                  <span name={i}>
                    <i>{pro.date} </i>
                  </span>
                </div>
              </Link>
            );
          })}
        </main>
      </section>
      <Footer />
    </>
  );
}

export default App;
