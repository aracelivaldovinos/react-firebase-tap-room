import { useState, useEffect } from "react";
import { projectFirestore } from '../firebase/config';

const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      setData(data)
      data.forEach((item) => {
        projectFirestore.collection('Beers').add({
          item
        }) 
      })  
    })
  }, [url])

  return {data};
}
 
export default useFetch;