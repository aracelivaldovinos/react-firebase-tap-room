const ReusableForm = (props) => {
  return (
    <div className="form">
         <form onSubmit={props.form}>
        <label><h2>Name:</h2></label>
        <input 
            type="text" 
            name="name"
            placeholder="Storm"
            required
          />
          <label><h2>Tagline:</h2></label>
          <input 
            type="text" 
            name="tagline"
            placeholder="Islay Whisky Aged IPA."
            required
          />
          <label><h2>Units:</h2></label>
          <input 
            type="text" 
            name="units"
            placeholder="Litres"
            required
          />
          <label><h2>Amount:</h2></label>
          <input 
            type="number" 
            name="amount"
            min="0"
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
            placeholder="Dark and powerful Islay magic infuses this tropical sensation of an IPA..."
          >
          </textarea>  
          <button type="submit">Submit</button>
      </form>
    </div>
    );
}
 
export default ReusableForm;