import { useState, useEffect } from 'react';
import  { projectFirestore }  from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    // .orderBy('id', 'desc')
    .onSnapshot((snap) =>{
      console.log(snap)
      let documents = [];
      snap.forEach(doc =>{
        console.log(doc.data)
        documents.push({...doc.data, id: doc.id})
      });
      setDocs(documents)
    });
    return () => unsub();
  }, [collection])

  return { docs }
}
 
export default useFirestore;