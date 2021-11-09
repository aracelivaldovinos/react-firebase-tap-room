import { Link } from "react-router-dom";
const LoginLink = () => {
  return ( 
    <div className="login-link">
        <Link to="/login">
          Login
        </Link>
      </div>
   );
}
 
export default LoginLink;