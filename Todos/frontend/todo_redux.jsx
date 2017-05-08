import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <h1>Todos App</h1>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
