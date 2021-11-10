import { useHistory } from "react-router";

const Homelink = ({setHome, setLogin}) => {
  const history = useHistory();

  const onClickingHome = () =>{
    setHome(false);
    setLogin(true);
    history.push('/');
  }
  return ( 
    <div className="homelink" onClick={onClickingHome}>
      Home
    </div>
   );
}
 
export default Homelink;