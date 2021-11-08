import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';


import Beer from "./Beer";
import BeerDetails from './BeerDetails';

const BeerList = ({docs}) => {
  const [beerDetails, setBeerDetails] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null)

  const handleClick = (id) =>{
    const filteredDoc = docs.filter((doc)=> (doc.id === id));
    const selectedBeer = filteredDoc[0];
    setSelectedDoc(selectedBeer);
    setBeerDetails(true)
  };

  return ( 
    <Row>
        {docs.map((beer) =>(
          <Col>
          <div key={beer.id} onClick={()=>handleClick(beer.id)}>
                <Beer
                  name = {beer.name}
                  tagline = {beer.tagline} 
                  description = {beer.description}
                  image_url = {beer.image_url}
                  keg = {beer.keg}
                  id = {beer.id}
                />  
          </div>
          </Col>
        ))} 
        {beerDetails && 
        selectedDoc && 
        <BeerDetails 
          selectedDoc= {selectedDoc} 
          setSelectedDoc={setSelectedDoc} /> }
    </Row>
   );
};
 
export default BeerList;