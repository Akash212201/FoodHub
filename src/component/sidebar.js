import { Link } from 'react-router-dom';
import './style/sidebar.css';
const Sidebar =({links,hideSidebar}) =>{
  return (
    <div className='sidebar'>
        {
            links.map(link =>( 
              <Link to={link.path} className="sidebarLinks" onClick={hideSidebar} key={link.name}>
                {link.name}
              </Link>
            ))
        }
    </div>
  )
}

export default Sidebar;