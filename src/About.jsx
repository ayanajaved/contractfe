import React from 'react'

export const About = () => {
  return (
    <div className="AboutBox">
  <section className="about-us">
    <div className="about">
      <div className="text">
        <h2>About Us:</h2>
        <h3>Ayana Javed</h3>
        <div>
        <img className="ayana" src='ayana_pic.jpg'></img>
        </div>
        <h5>Full Stack Developer</h5>
          <p style={{ color: 'silver', fontSize: '20px' }}>Ayana is currently a senior in highschool interested in computer science and law. She noticed that people tend to just blindly accept the terms and conditions or even sign a contract. However, many issues can arise from this which is why she created this website, which allows individuals to easily understand their legal documents. After all, law isn't just for lawyers!</p>
      </div>
    </div>
  </section>
    </div>
  )
}

export default About;