import Card from 'react-bootstrap/Card';

const BeerDetails = ({selectedDoc, setSelectedDoc}) => {
  const handleClick = (e) =>{
    if (e.target.classList.contains('beer-details')){
      setSelectedDoc(null)
    }
  }
  return ( 
    <div className="beer-details" onClick={handleClick}>
      <Card className="bootstrap-card">
            <Card.Img className="item-image" variant="top" src={selectedDoc.image_url} style={{ height: '225px', width: '75px'}}/>
            <Card.Body className="card-body">
              <Card.Title>{selectedDoc.name}</Card.Title>
              <Card.Text>
                <div className="tagline">
                  {selectedDoc.tagline}
                </div>
                <div className="description">
                  {selectedDoc.description}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
   );
}
 
export default BeerDetails;