import ReusableForm from "./ReusableForm";

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
      <ReusableForm form={handleSubmit}/>
    </div>
   );
}
 
export default EditForm;