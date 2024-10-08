import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="nav-container" >
                    {/* logo and name */}
                    <NavLink className="nav-items" to='/'>
                        <img className='logo' src={logo} alt="logo" />
                        <span className='my-name'> HIMANSHU RAWAT </span>
                    </NavLink>

                    {/* Title of the project */}
                    <h1 className='nav-h1'> USER MANAGEMENT SYSTEM </h1>
                    
                    {/* navigation links to other pages */}
                    <div className="nav-links">
                        <NavLink className="nav-links-items" to='/'>
                            Users
                        </NavLink>
                        <NavLink className="nav-links-items" to='/create-user'>
                            AddUser
                        </NavLink>
                        <NavLink className="nav-links-items" target='_blank' to='https://wa.me/+919968453518?text=I%27m%20interested%20in%20connecting%20with%20you'>
                            Contact
                        </NavLink>
                    </div>
            </div>
        </nav>

        {/* Hidden element- only shows on smaller screens */}
        <h1 className="hidden-h1">USER MANAGEMENT SYSTEM</h1>
        </>
    )
};

export default Navbar;