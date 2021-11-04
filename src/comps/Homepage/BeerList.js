import Beer from "./Beer";

const BeerList = ({docs}) => {
  return ( 
    <div className="beer-list">
      {docs.map((beer) =>(
        <div key={beer.id}>
          <Beer
            name = {beer.name}
            tagline = {beer.tagline} 
            description = {beer.description}
            image_url = {beer.image_url}
            keg = {beer.keg}
            id = {beer.id}
          />
        </div>
      ))}
      
    </div>
   );
}
 
export default BeerList;