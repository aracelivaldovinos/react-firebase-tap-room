
import Title from './Title';

import './LoginLink';
import LoginLink from './LoginLink';
import Logout from './Logout';

const Navbar = ({login, logout}) => {
  return ( 
    <nav className="navbar">
      <div className="title">
        <Title />
      </div>
      {login && <LoginLink />}
      {logout && <Logout />}
    </nav>
   );
}
 
export default Navbar;