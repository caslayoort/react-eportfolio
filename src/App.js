import React from 'react';
import {Content} from './components/body';
import {Menu,Overlay} from './components/menu';
import './bootstrap-3.4.1/css/bootstrap.css';

function App() {
  return (
    <div className='page'>
      <Menu/>
      <Content/>

      <Overlay/>
    </div>
  );
}

export default App;