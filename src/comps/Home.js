// import  useFetch  from '../hooks/useFetch';
import  useFirestore  from '../hooks/useFirestore';
import { projectFirestore } from '../firebase/config';
import AddForm from './AddForm';
import {Card, Row, Col} from 'react-bootstrap';

const Home = () => {
  // const {error, loading} = useFetch('https://api.punkapi.com/v2/beers');
  const {docs} = useFirestore('Beers');

  const onClickingDelete = (id) =>{
    projectFirestore.collection('Beers').doc(id).delete();
  }

  return ( 
    // <div className="home">
      <Row>
      {docs && docs.map((doc)=>(
        <Col>
        <div className="doc-div" key={doc.id}>
          <Card className= "center" style={{ width: '18rem' }}>
            <div className="cross" onClick={()=>onClickingDelete(doc.id)}>x</div>
            <Card.Img variant="top" src={doc.image_url} style={{ height: '12rem' }}/>
              <Card.Body>
                <Card.Title>{doc.name}</Card.Title>
                <Card.Text>
                  {doc.tagline}
                </Card.Text>
              </Card.Body>
          </Card>
        </div>
        </Col>
      ))}
      {/* {error && <div>{error}</div>}
      {loading && <div>Loading...</div>} */}
      <AddForm />
      </Row>
    // </div>
   );
}
 
export default Home;