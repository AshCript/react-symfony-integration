import React from 'react';
import ReactDOM from 'react-dom';
// import '../styles/bootstrap.scss';
// import 'bootstrap/dist/js/bootstrap.bundle';
import 'semantic-ui-css/semantic.min.css';
import '../styles/app.css'
import { Container } from 'semantic-ui-react';
// import 'jquery';
import App from './components/App';
import Clock from './components/Clock';

ReactDOM.render(
    <Container>
      {/* <Top/> */}
      <br/>
      <App/>
    </Container>
  ,
  document.querySelector("#app")
);