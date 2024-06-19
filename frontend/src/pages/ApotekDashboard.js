import { useState } from 'react';
import './apotekdashboard.css';
import Header from './header.js';
import Sidebar from './sidebar.js';
import Home from './home.js';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header openSidebar={openSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
      <Home />
    </div>
  );
}

export default App;
