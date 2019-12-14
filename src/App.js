import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/Postform';

function App() {
  return (
    <div>
      <PostForm />
          <Posts />
           
    </div>
    
  );
}

export default App;
