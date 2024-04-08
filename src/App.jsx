import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom"
import Blush from './pages/Blush'
import Bronzer from './pages/Bronzer'
import Eyebrow from './pages/Eyebrow'
import Eyeliner from './pages/Eyeliner'
import Eyeshadow from './pages/Eyeshadow'
import Foundation from './pages/Foundation'
import Lip_liner from './pages/Lip_liner'
import Lip_stick from "./pages/Lip_stick"
import Mascara from './pages/Mascara'
import Nail_polish from './pages/Nail_polish'
import Basket from './pages/basket'
import Loading from './components/loading'
import Id from './id/id'
import Category from './pages/Category'
import CategoryA from './pages/CategoryA'
import Likes from './pages/likes'

function App() {
  return (
    <>
      <Loading/>
      <Hero />
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={<Blush />} />
        <Route path='/bronzer' element={<Bronzer />} />
        <Route path='/eyebrow' element={<Eyebrow />} />
        <Route path='/eyeliner' element={<Eyeliner />} />
        <Route path='/eyeshadow' element={<Eyeshadow />} />
        <Route path='/foundation' element={<Foundation />} />
        <Route path='/lip_liner' element={<Lip_liner />} />
        <Route path='/lip_stick' element={<Lip_stick />} />
        <Route path='/mascara' element={<Mascara />} />
        <Route path='/nail_polish' element={<Nail_polish />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/id' element={<Id/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/categorya' element={<CategoryA/>}/>
        <Route path='/likes' element={<Likes/>}/>
      </Routes>
    </>
  )
}

export default App
