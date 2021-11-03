// import  useFetch  from '../hooks/useFetch';
import {useState} from 'react';
import  useFirestore  from '../hooks/useFirestore';
import { projectFirestore } from '../firebase/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeerList from './BeerList';
import AddForm from './AddForm';



const Home = () => {
  // const {error, loading} = useFetch('https://api.punkapi.com/v2/beers');
  const {docs} = useFirestore('Beers');
 
  // const [image_url, setImage_url ] = useState(null);
  // const [error, setError] = useState(null);
  // const types = ['image/png', 'image/jpeg'];

  // const changeHandler = (e) =>{
  //   e.preventDefault();
  //  let image = (e.target.files[0].name);
  //  console.log(image)
  //  if (image && types.includes(image.type)){
  //    setImage_url(image);
  //    setError('')
  //  }else {
  //    setImage_url(null);
  //    setError('Please select an image file (png or jpeg)')
  //  }
  // }

  const onClickingDelete = (id) =>{
    projectFirestore.collection('Beers').doc(id).delete();
  }

  const onClickingSell = (id) =>{
    // const keg = {docs.filter((doc)=> doc.id === id)}
  
  }

  const onClickingAdd = (beer) =>{
    console.log(beer)
    projectFirestore.collection('Beers').add({
      name: beer.name,
      description: beer.description,
      tagline: beer.tagline,
      // image_url: beer.image_url,
      keg: beer.keg
  
    });

  }

  return ( 
    <div className="home">
      <BeerList docs={docs} handleDelete={onClickingDelete} handleSell={onClickingSell}/>
      <AddForm handleSubmitForm={onClickingAdd}/>
    </div>
   );
}
 
export default Home;