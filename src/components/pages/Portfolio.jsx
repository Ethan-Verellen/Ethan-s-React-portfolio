import text from '../../Assets/images/text.png';
import note from '../../Assets/images/Note.png';
import api from '../../Assets/images/Api.png';
import blog from '../../Assets/images/Blog.png';
import weather from '../../Assets/images/Weather.png';
import employee from '../../Assets/images/Employee.png';

export default function Portfolio() {
  return (
    <div id="mb">
      <h1>Portfolio Page</h1>
      <p>
      </p>
      
      <div className="card" id="c">
        <img className="card-img-top" id="img" src={text} alt="image of a text editor" />
        <div className="card-body">
        <h5 className="card-title" id='info'>Project Name: PWA Text Editor</h5>
        <p id='text' >This text editor allows for the user to type out anything they want as if it is a text file.  This was given to me as a website that works and I was asked to make it a PWA, also known as a Progressive Web App.  This allows the user to download it as an app and use the website directly from the computer and not require internet access.</p>
        <a href="https://github.com/Ethan-Verellen/text-editor-PWA-update-">Git Hub Repo</a> &ensp; &emsp; &emsp;
        <a href="https://text-editor-pwa-update.onrender.com/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c">
      <img className="card-img-top" id="img" src={note} alt="Image of a note take" />
        <div className="card-body">
        <h5 className="card-title" id='info'>Project Name: Note Taker</h5>
        <p id='text' >This is a simple website that allows the user to write down notes.  It was designed with a database, allowing the user to create their own items to add.  It uses express to get and post the information from the Database.  This is an example of combining the Front end and back end of a website.</p>
        <a href="https://github.com/Ethan-Verellen/Fancy-Notes">Git Hub Repo</a>  &ensp; &emsp; &emsp;
        <a href="https://fancy-notes.onrender.com/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c">
      <img className="card-img-top" id="img" src={api} alt="Image of insomnia of an Api" />
        <div className="card-body">
        <h5 className="card-title" id='info'>Project Name: API functionality</h5>
        <p id='text'>  This is a database-based project where I worked with SQL to make a database that interacts with multiple sections that can create, update, and delete. Backend based project.  Use of a Database viewing app is required, the image is of insomnia.</p>
        <a href="https://github.com/Ethan-Verellen/API-Functionality">Git Hub Repo</a>
        </div>
      </div>
      <div className="card" id="c">
      <img className="card-img-top" id="img" src={blog} alt="Image of a Darkmode of a Blog" />
        <div className="card-body">
        <h5 className="card-title" id='info'>Project Name: Blog</h5>
        <p id='text'>This is a basic project that allows any user to add to a personal blog.  It uses local storage, so only someone who uses the same computer can see what is written.  This was primarily used to focus on personal info storage for computers.</p>
        <a href="https://github.com/Ethan-Verellen/Self-blog?tab=readme-ov-file">Git Hub Repo</a>  &ensp; &emsp; &emsp;
        <a href="https://ethan-verellen.github.io/Self-blog/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c">
      <img className="card-img-top" id="img" src={weather} alt="Image of Weather of Detroit" />
        <div className="card-body">
        <h5 className="card-title" id='info'>Project Name: Weather Check</h5>
        <p id='text'>  This is a basic third part API app that allows users to input a city and view the weather for the next week there.  It uses openweathermap api to get the weather of that location.  This project was more of an interconnectivity test to see how working with API's work.</p>
        <a href="https://github.com/Ethan-Verellen/Weather-Check">Git Hub Repo</a>  &ensp; &emsp; &emsp;
        <a href="https://ethan-verellen.github.io/Weather-Check/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c">
      <img className="card-img-top" id="img" src={employee} alt="Image of an employee tracker" />
        <div className="card-body">
        <h5 className="card-title" id='info'>Project Name: Employee Tracker</h5>
        <p id='text'>  This is a logic site that is a way to input data and get a set of different bits of data.  It allows for organization, calculations of average wages, and randomization of an employee.  This uses arrays to save data and organize it and only uses JavaScript to run through everything.  This site was one of the earliest sites I made that I have on my GitHub.</p>
        <a href="https://github.com/Ethan-Verellen/Employee-Payroll-Tracker/">Git Hub Repo</a>  &ensp; &emsp; &emsp;
        <a href="https://ethan-verellen.github.io/Employee-Payroll-Tracker/">Working Site</a>
        </div>
      </div>
    </div>
  );
}
