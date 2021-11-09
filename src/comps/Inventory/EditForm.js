import { useParams } from "react-router-dom";

import ReusableForm from "./ReusableForm";

const EditForm = (props) => {
  const { id } = useParams();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e)
    const value = parseInt(e.target.amount.value)
    const unit = e.target.units.value
    const keg = {unit, value}
    props.handleSubmitForm({
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      keg: keg
    }, id)
  }

  return ( 
    <div className="form">
      <ReusableForm form={handleSubmit}/>
    </div>
   );
}
 
export default EditForm;