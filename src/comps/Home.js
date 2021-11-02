// import  useFetch  from '../hooks/useFetch';
import  useFirestore  from '../hooks/useFirestore';
import { projectFirestore } from '../firebase/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeerList from './BeerList';



const Home = () => {
  // const {error, loading} = useFetch('https://api.punkapi.com/v2/beers');
  const {docs} = useFirestore('Beers');

  const onClickingDelete = (id) =>{
    projectFirestore.collection('Beers').doc(id).delete();
  }

  return ( 
    <div className="home">
      <BeerList docs={docs} handleDelete={onClickingDelete}/>
    </div>
   );
}
 
export default Home;