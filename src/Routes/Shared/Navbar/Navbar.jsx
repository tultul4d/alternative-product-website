import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFoundation } from "react-icons/md";
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {



  const {user, logOut} = useContext(AuthContext);
  const handleSignUp = () =>{
    logOut()
    .then(() => console.log("logout"))
    .catch(error => console.error(error))
} 



  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
 

  const navItems = 
    <>
    <li><Link to="/">Home</Link></li>
    <li><Link>Queries </Link></li>
    <li><Link>Recommendations
For Me
 </Link></li>
    <li><Link to="/myqueriers">My Queries </Link></li>
    <li><Link>My recommendations  </Link></li>
    {/* <li><Link to="/login">Log-in</Link></li> */}
    </>;

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : ''} bg-base-100`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <h2 className='text-lg font-serif'>Ur.Chosen</h2>
          <MdFoundation />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-serif">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">

      {
                user ? <>
                <span>{user.email}</span>
                <a onClick={handleSignUp} className="btn">LogOut</a>
                </>  : <Link to="/login">
                <button onClick={handleSignUp} className="btn">Log-in</button>
                   </Link>
            }
       
        <button className="btn btn-outline" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
