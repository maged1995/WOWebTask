import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Header from './components/Header/index';
import Photos from './components/Photos/index';
import configureStore, { history } from "./store";

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Photos />
      </div>
    </Provider>
  );
}

export default App;
