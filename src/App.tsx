import React from 'react';
import './App.css';
import { Project } from './Project';

function App() {
  return (
    <div className="App">
      <Project title="fake title" images={[
        {
          url: './current-1.png',
          alt: '',
          scrollHorizontal: true
        }
      ]} description="fooo" dates={{ start: new Date(0), end: new Date(200000)}}/>
    </div>
  );
}

export default App;
