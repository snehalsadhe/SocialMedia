
import { useState } from 'react'

import Header from "./components/Header"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListContextProvider from "./store/PostList.store"
import './App.css'

function App() {
 const [selectedTab,setSelectedTab]=useState("Home");

  return (
    <PostListContextProvider>
    
    <div className="app-container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
      <Header/> 
      {selectedTab==="Home" ? <PostList/>:<CreatePost/>}
      <Footer/>
      </div> 
    </div>
    
    </PostListContextProvider>
    
  )
}

export default App
