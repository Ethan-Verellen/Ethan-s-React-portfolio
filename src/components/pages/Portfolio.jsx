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
      
      <div className="card" id="c1">
        <img className="card-img-top" src={text} alt="image of a text editor" />
        <div className="card-body">
        <h5 className="card-title">Name: text Editor</h5>
        <a href="https://github.com/Ethan-Verellen/text-editor-PWA-update-">Git Hub Repo</a> <br></br>
        <a href="https://text-editor-pwa-update.onrender.com/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c2">
      <img className="card-img-top" src={note} alt="Image of a note take" />
        <div className="card-body">
        <h5 className="card-title">Name: Note Taker</h5>
        <a href="https://github.com/Ethan-Verellen/Fancy-Notes">Git Hub Repo</a> <br></br>
        <a href="https://fancy-notes.onrender.com/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c1">
      <img className="card-img-top" src={api} alt="Image of insomnia of an Api" />
        <div className="card-body">
        <h5 className="card-title">Name: API functionality</h5>
        <a href="https://github.com/Ethan-Verellen/API-Functionality">Git Hub Repo</a>
        </div>
      </div>
      <div className="card" id="c2">
      <img className="card-img-top" src={blog} alt="Image of a Darkmode of a Blog" />
        <div className="card-body">
        <h5 className="card-title">Name: Blog</h5>
        <a href="https://github.com/Ethan-Verellen/Self-blog?tab=readme-ov-file">Git Hub Repo</a> <br></br>
        <a href="https://ethan-verellen.github.io/Self-blog/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c1">
      <img className="card-img-top" src={weather} alt="Image of Weather of Detroit" />
        <div className="card-body">
        <h5 className="card-title">Name: Weather Check</h5>
        <a href="https://github.com/Ethan-Verellen/Weather-Check">Git Hub Repo</a> <br></br>
        <a href="https://ethan-verellen.github.io/Weather-Check/">Working Site</a>
        </div>
      </div>
      <div className="card" id="c2">
      <img className="card-img-top" src={employee} alt="Image of an employee tracker" />
        <div className="card-body">
        <h5 className="card-title">Name: Employee Tracker</h5>
        <a href="https://github.com/Ethan-Verellen/Employee-Payroll-Tracker/">Git Hub Repo</a> <br></br>
        <a href="https://ethan-verellen.github.io/Employee-Payroll-Tracker/">Working Site</a>
        </div>
      </div>
    </div>
  );
}
