import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [current, setCurrent] = useState('About');

  function display() {
    switch(current) {
      case 'About':
        return <About/>;
        break;
    }
  }
  return (
    <div>
      <Header current={current} setCurrent={setCurrent}></Header>
      <main>{display()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
