const BeerDetails = ({selectedDoc}) => {
  return ( 
    <div className="beer-details">
      Details
      {selectedDoc.name}
    </div>
   );
}
 
export default BeerDetails;