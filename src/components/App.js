import React, { useState } from 'react';
import '../styles/App.css'

const App = () => {
   const[markdown,setMarkdown] = useState("");

   return(<div className='app'>
    <textarea value={markdown} onChange={(e)=> setMarkdown(e.target.value)}/>
    <div className='preview'>
    <h1>{markdown}</h1>
    </div>
   </div>)
}

export default App