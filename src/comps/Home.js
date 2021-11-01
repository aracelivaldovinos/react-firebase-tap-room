import  useFetch  from '../hooks/useFetch';

const Home = () => {
  const {data:beers} = useFetch('https://api.punkapi.com/v2/beers')
  

  return ( 
    <div className="home">
      {beers && beers.map((beer)=>(
        <div className="beer-div" key={beer.id}>
          {beer.name}
        </div>
      ))}
    </div>
   );
}
 
export default Home;