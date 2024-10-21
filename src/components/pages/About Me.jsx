import Ethan from '../../Assets/images/Ethan.jpg';

export default function AboutMe() {
  return (
    <div id="mb">
      <h1 id="title">About Me</h1>
      <img className="card-img-top" id="authimg" src={Ethan} alt="Image of Ethan Verellen" />
      <p id="description">
      My name is Ethan Verellen, and I am a beginner web designer with experience in a wide range of website based coding. I am a 22 year old male (he/him) with some intern-based work experience in web design and have just completed a <a href= "https://bootcamp.msu.edu/" id='link'> bootcamp</a> run by Michigan State University focused on web design.  I also have a Bachelor of Science from Eastern Michigan University in <a href= "https://www.emich.edu/cet/tech-professional-mgmt/programs/communication-technology/index.php" id='link'> Communication Technology</a> which ranged from computer programming, hardware/software, database creation/management, web design and graphics.  
      </p><br></br>
      <p id="description">While I am new to the field, I am confident that I will be able to bring knowledge and skill to any job. I have more extensive experience with the basic web design language, HTML, CSS, and JavaScript, as well as basic experience with many of the other well-used web design tools and languages. This very page is made by React within just weeks of exposure and study. In addition, I have worked with many types of databases and have learned to integrate them into programs and web pages. For the full list of the programs, languages and tools I have experience with, please go to the Resume page. In addition to that list, you will also find several examples of the types of projects I have done. Many of these were completed through the MSU bootcamp in which I worked in teams to design, code, and complete projects with deadlines. </p>
      <br></br>
    <p id="description">After graduating from college, I immediately searched to find another way to gain more experience and knowledge in the field I wished to work. This resulted in applying and being accepting in the MSU web design bootcamp certification. I am aware that there is always more to learn with all technological fields and am willing to work to gain that knowledge. I am a malleable and growing new web designer who wishes to take his first step into the working world of web design. </p>
    </div>
  );
}
