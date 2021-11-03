import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom';


const Beer = ({name, tagline, keg, id, image_url, handleSell, handleDelete, handleRestock}) => {
  let message = '';
  let sellButton

  if (keg.value !== 0){
    if (keg.value < 10){
      message = 'Almost Out!';
    }
    sellButton= <button onClick={()=>handleSell(id)}>Sell</button>
  }else{
    message = 'Out of Stock!';
  }
  return ( 
    <div className="beer">
      <Card style={{ width: '18rem', height: '30rem', marginBottom: '10px' }}>
            <div className="cross" onClick={()=>handleDelete(id)}>x</div>
            <Card.Img variant="top" src={image_url} style={{ height: '225px', width: '75px'}}/>
            <Card.Body className="card-body">
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <div className="tagline">
                  {tagline}
                </div>
                <div className="amount">
                  <h2>Pints: {keg.value}</h2>
                  <div className="message">
                    {message}
                  </div>
                  {sellButton}
                  <button onClick={()=>handleRestock(id)}>Restock</button>
                  
                  <button>
                    <Link to={`/edit/${id}`}>
                    Edit
                    </Link>
                  </button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
   );
}
 
export default Beer;