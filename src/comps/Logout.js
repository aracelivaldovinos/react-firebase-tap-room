import { Link } from 'react-router-dom';
const Logout = () => {
  return ( 
    <div className="logout-link">
        <Link to="/logout">
          Logout
        </Link>
      </div>
   );
}
 
export default Logout;