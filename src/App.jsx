import { useState } from 'react'
import Sidenav from './components/partials/Sidenav'
import Topnav from './components/partials/Topnav'


function App() {
  document.title = "Movie App | Home"
  return (
  <>
  <div className="bg-[#1F1E24] h-screen w-full flex">
    <Sidenav/>
    <div className="w-[80%] h-full">
    <Topnav/>
       </div>

  </div>
  </>
  )
}

export default App
