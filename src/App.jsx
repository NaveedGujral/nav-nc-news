import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Filter from './components/Filter';
import ListAllArticles from './components/ListAllArticles';
import Article from './components/Article';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Filter/>
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
