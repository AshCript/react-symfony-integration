import React from 'react';
import ReactDOM from 'react-dom';
// import '../styles/bootstrap.scss';
// import 'bootstrap/dist/js/bootstrap.bundle';
import 'semantic-ui-css/semantic.min.css';
// import 'jquery';
import App from './components/App';
import Top from './components/Top';
ReactDOM.render(
  (
    <>
      {/* <Top/> */}
      {/* <br/> */}
      <App/>
    </>
  ),
  document.querySelector("#app")
);