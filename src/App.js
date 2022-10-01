import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from "./components/ProjectItem";


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;