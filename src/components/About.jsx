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
    { img: '3d-animation.png', title: "3D Animation/Modeling" },
  ]
  return (
    <>
      <section className='about'>
        <Link to={'/'} className='arrow-left'>⇐</Link>
        <img src="/logo/name-logo.png" alt="" height={350} width={350} />
        <div>
          <h1>Hi, I'm Parul Hudda ✌️</h1>
          <p>My name is Parul Hudda ,I'm a Graphic Designer. A highly creative and motivated Fresher Graphic Designer with a passion for crafting visually appealing, professional content for a wide range of needs - from brand logos to web design and digital media. Seeking to join a dynamic team to utilize strong knowledge of color selection, text styles and layout design, and specialized design software to create high-quality visuals and customer satisfaction. Aiming to contribute to the success of an organization through innovative ideas and exceptional design.</p>
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
