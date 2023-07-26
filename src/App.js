import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cards from './Cards';
function App() {
  
  const [post,setPost] = useState(null)
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    async function getData(api){
      fetch(`${api}`)
      .then(response => response.json())
      .then(data => setPost(data))
    }
    getData('https://jsonplaceholder.typicode.com/posts')
    setLoading(false)
  },[])
 

  return (
    <div className="App">
      {
        loading? <h1>loading</h1> : <Cards pos = {post} ></Cards>
      }
      
    </div>
  );
}

export default App;
