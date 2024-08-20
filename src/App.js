import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage'
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h1>My Awesome Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles/:articleId' element={<ArticlePage />} />
            <Route path='/articles' element={<ArticlesListPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
