/**
 * Letras maiúsculas no começo dos nomes das pastas
 * se não, não funciona
 * React precisa ser utilizado em JSX - html em aquivo js
 *  sempre que for utilizar js dentro do html precisa utilizar {]
 * 
 * uma das maneiras de declarar <Header title="Semana OmniStack"/>
 *
 * conceito de estado, é uma informação que necessita ser alterada 
 * com clicks, incrementos entre outros 
 * 
 * conceito de Imutabilidade, não se pode mudar o valor da variavel
 * diretamente, precisa sobrepor com metodo {useState}
 * la tem uma função de alteração.
 * 
 * sempre que precisar armazenar valores, criaremos estados.
 * 
 * JSX - java script xml
 * uma das maneiras <Header title="Semana OmniStack"/>
 */

import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

  export default App;
