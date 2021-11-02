import { useState } from "react";
import { projectFirestore } from "../firebase/config";
import ReusableForm from "./ReusableForm";

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
    const keg = {unit, value};
    
    projectFirestore.collection('Beers').add({
      name: name,
      tagline: tagline,
      description: description,
      // image_url: image_url,
      keg: keg
    });
  };

  return ( 
    <div className="form">
      <ReusableForm 
      name = {name}
      setName = {setName}
      tagline = {tagline}
      setTagline = {setTagline}
      description = {description}
      setDescription = {setDescription}
      unit = {unit}
      setUnit = {setUnit}
      stringValue = {stringValue}
      setValue = {setValue}
      handleSubmit = {handleSubmit}
      />
    </div>
   );
}
 
export default AddForm;