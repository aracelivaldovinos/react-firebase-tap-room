import Card from 'react-bootstrap/Card';

const Beer = ({name, tagline, image_url}) => {
  return ( 
    <div className="beer">
      <Card className="card" style={{ width: '18rem', height: '30rem', marginBottom: '10px', paddingTop:'30px' }}>
        <Card.Img className="item-image" variant="top" src={image_url} style={{ height: '225px', width: '75px'}}/>
        <Card.Body className="card-body" style={{marginTop: '15px',  background: 'rgba(78,78,78,0.1)'}}>
          <Card.Title 
            style={{
              color:'#fff', 
              backgroundColor: 'rgba(239,182,178,0.6)', 
              padding: '20px', borderRadius:'4px'}}>
            <h3>
              <span>{name}</span>
            </h3>
          </Card.Title>
          <Card.Text >
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