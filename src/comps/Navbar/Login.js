import { useHistory } from 'react-router-dom';

import { projectAuth } from "../../firebase/config";

const Login = ({setLogin, setLogout}) => {
  const history = useHistory();

  const doSignIn = (e) => {
    e.preventDefault();
    const email = (e.target.email.value)
    const password = e.target.password.value
    projectAuth.signInWithEmailAndPassword(email, password)
    .then(() =>{
      console.log("Your In!");
      setLogin(false)
      setLogout(true)
      history.push("/inventory")
    })
    .catch((error)=>{
      console.log(error.message);
      alert('failed to Log in')
    })
  }

  return (
    <div className="form">
      <h1>Sign In</h1>
         <form onSubmit={doSignIn}>
    <input
      type='text'
      name='email'
      placeholder='email' />
    <input
      type='password'
      name='password'
      placeholder='Password' />
    <button type='submit'>Sign in</button>
  </form>
      
    </div>
   );
}
 
export default Login;