import React, { useState } from 'react';
import '../styles/App.css'

const App = () => {
   const[markdown,setMarkdown] = useState("");

   return(<div className='container'>
    <textarea value={markdown} onChange={(e)=> setMarkdown(e.target.value)}/>
    <div className='markdown'>
    {markdown}
    </div>
   </div>)
}

export default App