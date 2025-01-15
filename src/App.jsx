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
      img: "bb4.jpg",
      title: "You Can Taste With Our Combo",
      date: "15 December 2024",
    }, 
    {
      img: "bb-5.jpg",
      title: "Special Discount On Pizza",
      date: "20 December 2024",
    }, 
    {
      img: "jaade-ki-raat.jpg",
      title: "Jaade Ki Raat",
      date: "31 December 2024",
    }, 
    {
      img: "naols-menu.jpg",
      title: "Luxotic Nails Studio",
      date: "10 January 2025",
    }, 

    {
      img: "bb2p.jpg",
      title: "Bella Bites Party Hall",
      date: "5 December 2024",
    }, 
    {
      img: "bb3.jpg",
      title: "Bella Bites Bogo Day",
      date: "7 December 2024",
    }, 
    {
      img: "bellabites.jpg",
      title: "Bella Bites",
      date: "9 December 2024",
    }, 
    {
      img: "manoj.jpg",
      title: "Manoj Bakery And Cake House",
      date: "11 December 2024",
    }, 
    {
      img: "kiwii.jpg",
      title: "Nadec",
      date: "13 December 2024",
    }, 
    {
      img: "nutela.jpg",
      title: "Nutella",
      date: "15 December 2024",
    }, 
    {
      img: "pnbchulha.jpg",
      title: "Punjabi Chulha Family Dinner",
      date: "17 December 2024",
    }, 
    {
      img: "shyni.jpg",
      title: "100% Pure Silver Shyni.co",
      date: "19 December 2024",
    }, 
    {
      img: "song.jpg",
      title: "Upcoming Song Jaade Ki Raat",
      date: "21 December 2024",
    }, 
    {
      img: "store.jpg",
      title: "Queer Store",
      date: "23 December 2024",
    }, 
    {
      img: "nubis.jpg",
      title: "Nubis Pressure Washing",
      date: "25 December 2024",
    }, 
    {
      img: "heaven.jpg",
      title: "Slice Of Heavan",
      date: "27 December 2024",
    }, 
    {
      img: "edge.jpg",
      title: "Edge Ventue Beyond Your Normal Horizon",
      date: "29 December 2024",
    }, 
    {
      img: "monkey.jpg",
      title: "Without Digital Marketing No Value Of Your Brand",
      date: "1 January 2025",
    }, 
    
    {
      img: "milk.jpg",
      title: "Nesquick Milk",
      date: "2 December 2024",
    }, 
    {
      img: "pasta.jpg",
      title: "Facebook Pasta",
      date: "1 December 2024",
    }, 
    
    {
      img: "piza.jpg",
      title: "Day Nite Pizza",
      date: "30 November 2024",
    }, 
    {
      img: "nestle.jpg",
      title: "Nestle Coffee",
      date: "29 November 2024",
    }, 
    {
      img: "bridall.jpg",
      title: "Simran Makeover",
      date: "28 November 2024",
    }, 
    {
      img: "choc.jpg",
      title: "Choclate Shake",
      date: "27 November 2024",
    }, 
    {
      img: "combo.jpg",
      title: "Flavour Exploison Combo",
      date: "26 November 2024",
    }, 
    {
      img: "1000.jpg",
      title: "Social Media Marketing",
      date: "25 November 2024",
    }, 
    
    {
      img: "egg.jpg",
      title: "Healthy Food",
      date: "20 November 2024",
    },
    {
      img: "chiken.jpg",
      title: "Chicken Biryani",
      date: "19 November 2024",
    },
    {
      img: "ai.jpg",
      title: "AI Course",
      date: "18 November 2024",
    },
    {
      img: "digitalll.jpg",
      title: "Digital Marketing",
      date: "17 November 2024",
    },
    {
      img: "lipton2.jpg",
      title: "Lipton Juice",
      date: "16 November 2024",
    },
    {
      img: "gurunanak.jpg",
      title: "Happy Gurunanak Jayanti",
      date: "15 November 2024",
    },
    {
      img: "abroad.jpg",
      title: "Study Abroad",
      date: "17 November 2024",
    },
    {
      img: "best-digital.jpg",
      title: "Best Digital Marketing",
      date: "13 November 2024",
    },
    {
      img: "bhaidooj.jpg",
      title: "Happy Bhaidooj",
      date: "3 November 2024",
    },

    {
      img: "gordhan.jpg",
      title: "Govardhan Pooja",
      date: "2 November 2024",
    },
    {
      img: "haryanaday.jpg",
      title: "Happy Haryana Day",
      date: "1 November 2024",
    },
    {
      img: "diwali.jpg",
      title: "Happy Dipawli",
      date: "31 October 2024",
      
    },
    {
      img: "dhanteras.jpg",
      title: "Happy Dhanteras",
      date: "30 October 2024",
    },
   
    {
      img: "ritvik.jpg",
      title: "Ritvik Soni Web Developer",
      date: "20 October 2024",
    },

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
    {
      img: "1.jpg",
      title: "Coffee-Pea",
      date: "20 September 2024",
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
            <dijv className="front-end">
              <div className="dev front">Digital</div>
              <div className="line2 developer"></div>
              <div className="dev end">Marketing & Designer</div>
            </dijv>
            <main className="main-heading">
              <div className="main-div front">
                <span className="hey">Hey <span className="there">There,</span><span className="im">I'M</span></span>
                 <br />
                {/* <span className="im">I'M</span> <br /> */}
                <span className="parul">Parul Hudda</span>
              </div>
               <div className="end">
                <img src="/logo/1.png   " alt="" />
              </div> 
            </main>
          </section>
          <div className="logo-text">
            <img
              className="logo-img"
              src="/logo/digi.jpg"
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
        A highly motivated and results-driven individual with a passion for digital marketing.  <br />
        I possess a strong understanding of online marketing techniques, including SEO, content creation, social media management, and paid advertising. Eager to contribute my creativity and analytical skills to drive online engagement and increase brand visibility.<br />
        Adept at utilizing digital tools and marketing strategies to achieve business goals. <br />
        Seeking an entry-level opportunity to further develop my skills and contribute to the success of a dynamic digital marketing team.
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
