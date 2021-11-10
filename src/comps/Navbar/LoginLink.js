import { useHistory
 } from "react-router";
const LoginLink = ({setHome, setLogin}) => {
  const history = useHistory();

  const onClickingLogin = () =>{
    setHome(true);
    setLogin(false);
    history.push('/login')

  }
  return ( 
    <div className="login-link" onClick={onClickingLogin}>
      Login
    </div>
  );
}
 
export default LoginLink;