import download from '../../Assets/download/Resume.pdf'

export default function Resume() {
  return (
    <div id="mb">
      <h1>Resume Page</h1>
      <a href={download} download="download" id='link'>Click here to download my Resume</a><br></br><br></br>
      <h4>My skills include:</h4>
      <ul>HTML</ul>
      <ul>CSS</ul>
      <ul>JavaScript</ul>
      <ul>Python</ul>
      <ul>Bootstrap</ul>
      <ul>Hypertext Preprocessor</ul>
      <ul>API’s</ul>
      <ul></ul>
      <ul>NodeJs</ul>
      <ul>SQL</ul>
      <ul>Nosql</ul>
      <ul>PWA</ul>
      <ul>React</ul>
      <ul>Apollo</ul>

    </div>
  );
}
