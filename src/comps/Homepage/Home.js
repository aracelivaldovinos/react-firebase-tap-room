import BeerList from './BeerList';
import useFirestore from '../../hooks/useFirestore';
const Home = () => {
  const {docs} = useFirestore('Beers')

  return ( 
    <div className="homepage">
      <BeerList docs={docs}/>
    </div>
   );
}
 
export default Home;