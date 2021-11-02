import  useFetch  from '../hooks/useFetch';
import  useFirestore  from '../hooks/useFirestore';

const Home = () => {
  // const {error, loading} = useFetch('https://api.punkapi.com/v2/beers');
  const {docs} = useFirestore('Beers');

  // console.log(docs.data)

  return ( 
    <div className="home">
      {docs && docs.map((doc)=>(
        <div className="doc-div" key={doc.id}>{doc.name}</div>
      ))}
      {/* {error && <div>{error}</div>}
      {loading && <div>Loading...</div>} */}
    </div>
   );
}
 
export default Home;