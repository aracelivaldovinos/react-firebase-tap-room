import useFirestore from '../../hooks/useFirestore';
import BeerList from './BeerList';


const Home = () => {
  const {docs} = useFirestore('Beers');
  return ( 
    <div className="homepage">
      <BeerList docs={docs}/>
    </div>
   );
}
 
export default Home;