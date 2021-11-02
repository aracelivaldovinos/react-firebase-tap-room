import { useState, useEffect } from "react";
import { projectFirestore } from '../firebase/config';

const useFetch = (url) => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      if (!response.ok){
        throw Error(response.status);
      };
      return response.json();
    })
    .then((data)=>{
      data.forEach((item) => {
        projectFirestore.collection('Beers').add({
          name: item.name,
          tagline: item.tagline,
          description: item.description,
          image_url: item.image_url,
          volume: item.volume,
          ingredients: item.ingredients
          
        }); 
      });
      setLoading(false);  
    })
    .catch((error)=>{
      setError(error.message);
      setLoading(false);
    });
  }, [url]);

  return {error, loading};
};
 
export default useFetch;