import { useState } from "react";

import ReusableForm from "./ReusableForm";

const EditForm = () => {
  const [name, setName ] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');

  // const [image_url, setImage_url ] = useState(null);
  // const [error, setError] = useState(null);
  // const types = ['image/png', 'image/jpeg'];

  
  const [unit, setUnit] = useState('');
  const [stringValue, setValue] = useState(0);

  return ( 
    <div className="edit-form">
      {/* <ReusableForm 
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
      /> */}
    </div>
   );
}
 
export default EditForm;