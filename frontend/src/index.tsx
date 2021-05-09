//local onde configuramos as dependencias dos componentes 
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';//Importado caminho do CSS do bootstrap
import 'assets/css/styles.css';
import App from './App';

ReactDOM.render( //Trecho onde adicionamos os componentes React que seram apresentados após criação "App" ex de componente.
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

