import { projectAuth } from "../../firebase/config";
import { useHistory } from 'react-router';

const Logout = ({setLogin, setLogout}) => {
  const history = useHistory();
  const doSignOut = () => {
    projectAuth.signOut()
    .then(()=>{
      console.log("Successfully signed out!");
      setLogin(true);
      setLogout(false);
      history.push('/');
    })
    .catch((error)=>{
      console.log(error.message)
    })
  };
  return ( 
    <div className="logout-link">
        <div className="signout-btn" onClick={doSignOut}>
          Logout
        </div>
      </div>
   );
}
 
export default Logout;