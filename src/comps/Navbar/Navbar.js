import Title from './Title';
import './LoginLink';
import LoginLink from './LoginLink';
import Logout from './Logout';
import Homelink from './Homelink';

const Navbar = ({login, logout, home, setLogin, setLogout, setHome}) => {
  return ( 
    <nav className="navbar">
      <div className="title">
        <Title />
      </div>
      {login && <LoginLink setHome={setHome} setLogin={setLogin}/>}
      {logout && <Logout setLogin={setLogin} setLogout={setLogout}/>}
      {home && <Homelink setHome={setHome} setLogin={setLogin}/>}

    </nav>
   );
}
 
export default Navbar;