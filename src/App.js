import './App.css';
import { collection, getDocs } from "firebase/firestore";
import { app, analytics, db } from './FirebaseConfig'
import { useEffect } from 'react';


function App() {
  const collectionRef = collection(db, 'Frutas')
  useEffect(async() => {
      const docSnap = await getDocs(collectionRef);
      docSnap.forEach((doc) => {
        console.log(doc.data())
      
      });}, []) 
    
  return (
    <div className="App">

    </div>
  );
}

export default App;
