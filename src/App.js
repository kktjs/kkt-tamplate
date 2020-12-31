import React from 'react';
import logo from './logo.svg';
import styles from './App.module.less';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className={styles.app}>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        &nbsp;&nbsp;
        <a
          className="App-link"
          href="https://github.com/kktjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn KKT
        </a>
      </div>
    </header>
  </div>
);

export default App;
