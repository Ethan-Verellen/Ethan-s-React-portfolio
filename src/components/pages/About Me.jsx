import Ethan from '../../Assets/images/Ethan.jpg';

export default function AboutMe() {
  return (
    <div id="mb">
      <h1>About Me</h1>
      <img className="card-img-top" id="authimg" src={Ethan} alt="Image of Ethan Verellen" />
      <p id="description">
      My name is Ethan Verellen, and I am a beginner web designer with some experience with html, scc, and javascript.  For more on what I have worked with, got to the page called resume.  I am a 22 year old with no work experience in webdesign, but am in a boot camp run by Michigan State Univerity.  I also have a communication technology bachelor from Eastern Michigan University. 
      </p>
    </div>
  );
}
