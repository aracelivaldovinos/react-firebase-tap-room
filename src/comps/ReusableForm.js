const ReusableForm = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.handleSubmit}>
        <label><h2>Name:</h2></label>
        <input 
            type="text" 
            name="name"
            value = {props.name} 
            onChange = {(e)=> props.setName(e.target.value)}
            placeholder="Storm"
            required
          />
          <label><h2>Tagline:</h2></label>
          <input 
            type="text" 
            name="tagline"
            value = {props.tagline}
            onChange = {(e)=> props.setTagline(e.target.value)} 
            placeholder="Islay Whisky Aged IPA."
            required
          />
          <label><h2>Units:</h2></label>
          <input 
            type="text" 
            name="units"
            value = {props.unit}
            onChange = {(e)=> props.setUnit(e.target.value)} 
            placeholder="Litres"
            required
          />
          <label><h2>Amount:</h2></label>
          <input 
            type="number" 
            name="amount"
            min="0"
            value = {props.stringValue}
            onChange = {(e)=> props.setValue(e.target.value)} 
            placeholder="5"
            required
          />

          {/* <input 
          type="file" 
          name="image"
          value = {image_url}
          onChange = {changeHandler}  
          placeholder="Image"
          /> */}
          <label><h2>Description:</h2></label>
          <textarea
            name="description"
            value = {props.description} 
            onChange = {(e)=> props.setDescription(e.target.value)}
            placeholder="Dark and powerful Islay magic infuses this tropical sensation of an IPA..."
          >
          </textarea>  
          <button type="submit">Submit</button>
      </form>
    </div>
    );
}
 
export default ReusableForm;