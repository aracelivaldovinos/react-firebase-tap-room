import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import { projectFirestore } from '../firebase/config';
import Beer from './Beer';


const BeerList = ({docs, handleDelete}) => {
  
  const handleSell = (id) =>{
    const sellKeg = docs.filter((doc)=>doc.id === id)
    let value = sellKeg[0].keg.value
    const unit = sellKeg[0].keg.unit
    value--
    const keg = {unit, value}
    projectFirestore.collection('Beers').doc(id).update({
      keg: keg
    })
  }
  
  return ( 
    <Row>
    {docs && docs.map((doc)=>(
      <Col>
        <div className="doc-div" key={doc.id}>
          <Beer 
          name = {doc.name}
          tagline = {doc.tagline}
          keg = {doc.keg}
          id = {doc.id}
          image_url = {doc.image_url}
          handleSell = {handleSell}
          handleDelete = {handleDelete}
          />
        </div>
      </Col>
    ))}
  </Row>

   );
}
 
export default BeerList;