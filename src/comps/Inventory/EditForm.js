import ReusableForm from "./ReusableForm";
import {FaArrowCircleLeft} from "react-icons/fa";

const EditForm = (props) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const value = parseInt(e.target.amount.value);
    const unit = e.target.units.value;
    const keg = {unit, value};
    props.handleSubmitForm({
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      keg: keg
    });
  }
  return ( 
    <div className="form">
      <div>
        <FaArrowCircleLeft title="Go back" onClick={props.backBtn} style={{height: '24px', width: '24px', margin: '10px', float: 'left', cursor:'pointer'}}/>
      </div>
      <ReusableForm form={handleSubmit}/>
    </div>
   );
}
 
export default EditForm;