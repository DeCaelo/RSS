import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAqStmlkaNA_KWF9oKFZ21Z22GOgcjRGEc';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    );
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
