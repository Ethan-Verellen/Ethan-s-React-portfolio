import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/About Me';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main id='main'>{renderPage()}</main>
      
      <footer id='footer'>
        <a href= "https://github.com/Ethan-Verellen" id='link'> Github</a><br></br><a href= "https://www.linkedin.com/in/ethan-verellen-755139320/" id='link'> Linkedin</a><br></br><a href= "mailto:ethanverellen@gmail.com" id='link'> Ethanverellen@gmail.com</a>
      </footer>
    </div>
  );
}
