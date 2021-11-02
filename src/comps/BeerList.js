import {Link} from 'react-router-dom';
import {Card, Row, Col} from 'react-bootstrap';

const BeerList = ({docs, handleDelete}) => {
  
  return ( 
    <Row>
    {docs && docs.map((doc)=>(
      <Col>
        <div className="doc-div" key={doc.id}>
          <Card style={{ width: '18rem' }}>
            <div className="cross" onClick={()=>handleDelete(doc.id)}>x</div>
            <Card.Img variant="top" src={doc.image_url} style={{ height: '225px', width: '75px'}}/>
            <Card.Body className="card-body">
              <Card.Title>{doc.name}</Card.Title>
              <Card.Text>
                <div className="tagline">
                  {doc.tagline}
                </div>
                <div className="amount">
                  <h2>Pints: {doc.keg.value}</h2>
                  <button>Sell</button>
                  <button>Restock</button>
                  <button>
                    <Link to={`/edit/${doc.id}`}>
                    Edit
                    </Link>
                  </button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    ))}
  </Row>

   );
}
 
export default BeerList;