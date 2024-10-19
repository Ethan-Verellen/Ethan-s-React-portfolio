import Ethan from '../../Assets/images/Ethan.jpg';

export default function AboutMe() {
  return (
    <div id="mb">
      <h1>About Me</h1>
      <img className="card-img-top" id="authimg" src={Ethan} alt="Image of Ethan Verellen" />
      <p id="description">
      My name is Ethan Verellen, and I am a beginner web designer with some experience with a wide range of website based coding.  For more on what I have worked with or on, go to the page called resume.  I am a 22 year old with no work experience in webdesign, but have completed a boot camp run by Michigan State Univerity which focuses on web design.  I also have a bachelor of science from Eastern Michigan University, the degree is called communication technology. 
      </p><br></br>
      <p id="description">I am new to the field but am ready and willing to learn.  I have experience with the basic web design language, HTML, CSS, and JavaScript, as well as basic experience with a lot of other well used webdesign tools and languages.  This very page is made by React, and I have worked with types of databases.  For the full list of what I have experience with, as stated before, please go to the resume page, which has examples of what types of projects I have done.  These projects are mainly from the bootcamp, but they allowed for a similar experience to actuall work.</p>
      <br></br>
    <p id="description">After graduating from college, I imediatly went to try and find another way to gain more experience and knowlege in the field I wished to work in, and went to a boot camp.  This shows that I am always willing to admit that I do not have all the information and am willing to try and find the info through the means I have access to.  I am a maluable and growing new webdesigner who wishes to take his first step into the world of webdesign.</p>
    </div>
  );
}
