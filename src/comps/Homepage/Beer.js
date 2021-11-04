import Card from 'react-bootstrap/Card';

const Beer = ({name, tagline, image_url}) => {
  return ( 
    <div className="beer">
       <Card className="card" style={{ width: '18rem', height: '30rem', marginBottom: '10px' }}>
            <Card.Img className="item-image" variant="top" src={image_url} style={{ height: '225px', width: '75px'}}/>
            <Card.Body className="card-body">
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <div className="tagline">
                  {tagline}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
   );
}
 
export default Beer;