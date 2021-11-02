import { useState } from "react";
// import { projectFirestore } from "../firebase/config";

const AddForm = () => {
  const [name, setName ] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImage_url ] = useState(null);

  const [volume, setVolume ] = useState({});
  const [unit, setUnit] = useState('')
  const [value, setValue] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setVolume({unit, value});
    console.log(volume)
    console.log(e)
    // projectFirestore.collection('Beers').add({

    //   })
  }

  return ( 
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          value = {name} 
          onChange = {(e)=> setName(e.target.value)}
          placeholder="Storm"
          required/>

          <input 
          type="text" 
          name="tagline"
          value = {tagline}
          onChange = {(e)=> setTagline(e.target.value)} 
          placeholder="Islay Whisky Aged IPA."
          required/>

          <input 
          type="text" 
          name="units"
          value = {unit}
          onChange = {(e)=> setUnit(e.target.value)} 
          placeholder="Litres"
          required/>

          <input 
          type="number" 
          name="amount"
          min="0"
          value = {value}
          onChange = {(e)=> setValue(e.target.value)} 
          placeholder="5"
          required/>

          <input 
          type="file" 
          name="image"
          onChange = {(e)=> setImage_url(e.target.value)}
          value = {image_url}  
          placeholder="Image"
          />

          <textarea
          name="description"
          value = {description} 
          onChange = {(e)=> setDescription(e.target.value)}
          placeholder="Dark and powerful Islay magic infuses this tropical sensation of an IPA..."
          >
          </textarea>  
          <input type="submit" value="Submit" />
      </form>
    </div>
   );
}
 
export default AddForm;