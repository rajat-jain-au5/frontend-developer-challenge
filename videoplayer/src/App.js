import React from 'react';
import './App.css';
import Videoplayer from './Component/Videoplayer';

function App() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-md  navbar-color  overlay1">
          <a className="navbar-brand text-white " href="/dashboard">
            <h1 >
              Video<span className=" text-warning">player</span>
            </h1>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right  "
            type="button"
            data-toggle="collapse"
            data-target="#navb"
            aria-expanded="true"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
        </nav>
      </div>
      <Videoplayer />
    </div>
  );
}

export default App;
