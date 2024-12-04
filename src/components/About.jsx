import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function About() {
  const logo = [
    { img: 'typography.png', title: "Typography" },
    { img: 'clr-th.jpg', title: "Color Theory" },
    { img: 'layout.jpg', title: "Layout Design" },
    { img: 'printdesign.webp', title: "Print Design" },
    { img: 'webdesign.jpeg', title: "Web Design" },
    { img: 'ux-ui-logo.png', title: "UI/UX Design" },
    { img: 'digital-design.webp', title: "Digital Design" },
    { img: 'Motion-Graphics.webp', title: "Motion Graphics" },
    { img: 'illustartion.jpeg', title: "Illustration" },
    { img: 'logocre.jpeg', title: "Logo Creation" },
    { img: '3d-animation.png', title: "Google Business" },
    { img: '3d-animation.png', title: "Photopea" },
    { img: '3d-animation.png', title: "Canva" },
    { img: '3d-animation.png', title: "Business Logo" },
  ]
  return (
    <>
      <section className='about'>
        <Link to={'/'} className='arrow-left'>⇐</Link>
        <img src="/logo/name-logo.png" alt="" height={350} width={350} />
        <div>
          <h1>Hi, I'm Parul Hudda ✌️</h1>
          <p>My name is Parul Hudda ,A highly motivated and results-driven individual with a passion for digital marketing. I possess a strong understanding of online marketing techniques, including SEO, content creation, social media management, and paid advertising. Eager to contribute my creativity and analytical skills to drive online engagement and increase brand visibility. Adept at utilizing digital tools, data analytics, and marketing strategies to achieve business goals. Seeking an entry-level opportunity to further develop my skills and contribute to the success of a dynamic digital marketing team.</p>
        </div>
        <div>
          <h1>Tools</h1>
        </div>
        <div className='logo-grid lang-logo'>
          {
            logo.map((l, i) => {
              return (
                <div key={i} className='logo-name'>
                  <img src={`/logo/${l.img}`} alt="" height={20} width={20} />
                  <span>{l.title}</span>
                </div>
              )
            })
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
