import { useState } from 'react'
import './index.css'
import Card from './Components/Card'
import List from './Components/List'

function App() {
  const [musicNumber, setMusicNumber] = useState(0)
  const [open, setOpen] = useState(false)
  

  return (
    <>
      <div className='container'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
        <main>
          <Card props={{musicNumber,setMusicNumber, setOpen, open}} />
          <List props={{musicNumber,setMusicNumber,open,setOpen}} />
        </main>

      </div>
    </>
  )
}

export default App
