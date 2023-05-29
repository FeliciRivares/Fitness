import { useEffect } from "react"
import { useState } from "react"
import Benefits from "./scenes/benefits"
import Home from "./scenes/home"
import Navbar from "./scenes/navbar"
import { SelectedPage } from "./shared/types"



function App() {
  const [selectedPage, setSelectedPage] = useState("Home")
  const [topOfScreen, setTopOfScreen] = useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0){
        setTopOfScreen(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0){
        setTopOfScreen(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll)
}, [])
  return (
    <div className="app bg-gray-20"> 
      <Navbar
      topOfScreen={topOfScreen}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>

      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
