import React from 'react';
import { 
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsBrowserEdge, BsBoxArrowRight 
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add your logout logic here, e.g., clearing tokens, etc.
        console.log("User logged out");
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand' style={{ color: 'white' }}>
                    <BsCart3 className='icon_header' /> APOTEK
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item' onClick={() => navigate('/')}>
                    <a href="#">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={() => navigate('/obat')}>
                    <a href="#">
                        <BsFillArchiveFill className='icon' /> Obat
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={() => navigate('/kategori')}>
                    <a href="#">
                        <BsFillGrid3X3GapFill className='icon' /> Kategori
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={() => navigate('/kustomer')}>
                    <a href="#">
                        <BsPeopleFill className='icon' /> Kustomer
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={() => navigate('/inventory')}>
                    <a href="#">
                        <BsBrowserEdge className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list-item logout'>
                    <button className="btn btn-danger w-100" onClick={handleLogout}>
                        <BsBoxArrowRight className='icon' /> Logout
                    </button>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
