import { useState } from "react";
import { projectFirestore } from "../firebase/config";

const AddForm = () => {
  const [name, setName ] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');

  // const [image_url, setImage_url ] = useState(null);
  // const [error, setError] = useState(null);
  // const types = ['image/png', 'image/jpeg'];

  
  const [unit, setUnit] = useState('');
  const [stringValue, setValue] = useState(0);

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


  const handleSubmit = (e) =>{
    e.preventDefault();
    const value = parseInt(stringValue);
    const volume = {unit, value};
    
    projectFirestore.collection('Beers').add({
      name: name,
      tagline: tagline,
      description: description,
      // image_url: image_url,
      volume: volume
    });
  };

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
          value = {stringValue}
          onChange = {(e)=> setValue(e.target.value)} 
          placeholder="5"
          required/>

          {/* <input 
          type="file" 
          name="image"
          value = {image_url}
          onChange = {changeHandler}  
          placeholder="Image"
          /> */}

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