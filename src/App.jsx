import { Routes, Route } from 'react-router-dom'
import './App.css'
import PostClassified from './Components/PostClassified'
import BrowseClassified from './Components/BrowseClassified'
import Nav from './Components/Nav'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' Component={Nav}></Route>
        <Route path='/PostClassified' Component={PostClassified}></Route>
        <Route path='/BrowseClassified' Component={BrowseClassified}></Route>
      </Routes>
    </>
  )
}

export default App
