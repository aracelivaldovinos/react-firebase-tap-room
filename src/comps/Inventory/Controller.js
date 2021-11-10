// import  useFetch  from '../hooks/useFetch';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { projectAuth } from '../../firebase/config';

import useFirestore  from '../../hooks/useFirestore';
import Inventory from './Inventory';
import AddForm from './AddForm';
import Login from '../Navbar/Login';
import EditForm from './EditForm';



const Controller = () => {
  // const {error, loading} = useFetch('https://api.punkapi.com/v2/beers');
  const {docs} = useFirestore('Beers');
  const [inventory, setInventory] = useState(true);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [button, setButton] = useState(true);
  const [id, setId] = useState(null);
  const history = useHistory();
  

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

  const handleClickAdd = () =>{
    setAddForm(true);
    setInventory(false);
    setEditForm(false);
    setButton(false);
  };

  const handleClickEdit = (id) =>{
    setId(id);
    setAddForm(false);
    setInventory(false);
    setEditForm(true);
    setButton(false);
  };

  const handleClickBackBtn = () => {
    setAddForm(false);
    setInventory(true);
    setEditForm(false);
    setButton(true);
  }

  const onClickingDelete = (id) =>{
    projectFirestore.collection('Beers').doc(id).delete();
  }

  const onClickingSell = (id) =>{
    const sellKeg = docs.filter((doc)=>doc.id === id);
    let value = sellKeg[0].keg.value;
    const unit = sellKeg[0].keg.unit;
    value--
    const keg = {unit, value}
    projectFirestore.collection('Beers').doc(id).update({
      keg: keg
    });
  };

  const onClickingRestock = (id) =>{
    const restockKeg = docs.filter((doc)=>doc.id === id);
    let value = 200;
    const unit = restockKeg[0].keg.unit;
    const keg = {unit, value};
    projectFirestore.collection('Beers').doc(id).update({
      keg: keg
    });
  };

  const onClickingAdd = (beer) =>{
    console.log(beer)
    projectFirestore.collection('Beers').add({
      name: beer.name,
      description: beer.description,
      tagline: beer.tagline,
      // image_url: beer.image_url,
      keg: beer.keg
    });
    setAddForm(false);
    setInventory(true);
    setButton(true);
  };

  const onClickingEdit = (beer) =>{
    projectFirestore.collection('Beers').doc(id).update({
      name: beer.name,
      description: beer.description,
      tagline: beer.tagline,
      // image_url: beer.image_url,
      keg: beer.keg
    });
    setEditForm(false);
    setInventory(true);
    setButton(true);
  };

  if (projectAuth.currentUser === null) {
    history.push("/login");
    return(<Login />)
  }
  else {
    return ( 
      <div className="Controller">
        {button && 
          <button title="Add a keg" 
            className="add" 
            onClick={handleClickAdd}>
            <span>+</span>
          </button>
        }
        {inventory && 
          <Inventory 
            docs={docs} 
            handleDelete={onClickingDelete} 
            onClickEdit={handleClickEdit}
            handleSell={onClickingSell}
            handleRestock={onClickingRestock}
          />
        }
        {addForm && <AddForm handleSubmitForm={onClickingAdd} backBtn={handleClickBackBtn}/>}
        {editForm && <EditForm handleSubmitForm={onClickingEdit} backBtn={handleClickBackBtn}/>}
      </div>
    );
  }
}
 
export default Controller;