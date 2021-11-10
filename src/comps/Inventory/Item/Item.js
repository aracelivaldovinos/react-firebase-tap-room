import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import {AiFillCloseCircle} from "react-icons/ai";
import './Item.css';

const Item = ({
  name, 
  tagline, 
  keg, 
  id, 
  image_url, 
  handleSell, 
  handleDelete, 
  handleRestock,
  onClickEdit}) => {
    
  let message = '';
  let sellButton;

  if (keg.value !== 0){
    if (keg.value < 10){
      message = <Alert variant="warning">Almost Out!</Alert>;
    }
    sellButton= <button onClick={()=>handleSell(id)}>Sell</button>
  }else{
    message = <Alert variant="danger">Out of Stock!</Alert>;
  }
  return ( 
    <div className="Item">
      <Card className="card" style={{ width: '18rem', height: '35rem', marginBottom: '10px' }}>
        <div className="cross" onClick={()=>handleDelete(id)}>
          <AiFillCloseCircle style={{float: 'left', paddingTop: '2px', marginBottom: '20px', cursor:'pointer'}}/>
        </div>
        {message}
        <Card.Img className="item-image" variant="top" src={image_url} style={{ height: '225px', width: '75px'}}/>
        <Card.Body className="card-body" style={{marginTop: '15px',  background: 'rgba(78,78,78,0.2)'}}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <div className="tagline">
              {tagline}
            </div>
            <div className="amount" style={{marginTop: '15px'}}>
              <h2>Pints: {keg.value}</h2>
              {sellButton}
              <button onClick={()=>handleRestock(id)}>Restock</button>
              <button onClick={()=>onClickEdit(id)}>Edit</button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
   );
}
 
export default Item;