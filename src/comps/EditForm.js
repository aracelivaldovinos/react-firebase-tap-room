import { useState } from "react";
import { useParams } from "react-router-dom";

import ReusableForm from "./ReusableForm";
import { projectFirestore } from "../firebase/config";

const EditForm = () => {
  const { id } = useParams();

  const [name, setName ] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');

  // const [image_url, setImage_url ] = useState(null);
  // const [error, setError] = useState(null);
  // const types = ['image/png', 'image/jpeg'];

  
  const [unit, setUnit] = useState('');
  const [stringValue, setValue] = useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const value = parseInt(stringValue);
    const keg = {unit, value};
    projectFirestore.collection('Beers').doc(id).update({
      name: name,
      tagline: tagline,
      description: description,
      keg: keg
    })
  }

  return ( 
    <div className="form">
      Edit Form - {id}
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
 
export default EditForm;