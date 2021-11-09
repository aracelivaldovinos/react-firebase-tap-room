
import Title from './Title';

import './LoginLink';
import LoginLink from './LoginLink';
import Logout from './Logout';

const Navbar = ({login, logout, setLogin, setLogout}) => {
  return ( 
    <nav className="navbar">
      <div className="title">
        <Title />
      </div>
      {login && <LoginLink />}
      {logout && <Logout setLogin={setLogin} setLogout={setLogout}/>}
    </nav>
   );
}
 
export default Navbar;