import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import ListAllArticles from './components/ListAllArticles';
import Article from './components/Article';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
        <div className='App'>
          <Header/>
          <div className='DisplayPane'>
          <Routes>
            <Route path="/" element={<ListAllArticles/>}/>
            <Route path="/api/articles/:article_id" element={<Article/>}/>
          </Routes>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
