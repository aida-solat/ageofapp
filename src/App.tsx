import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './core/Main';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './core/store/configureStore';
import Home from './core/screens/home/Home';
import Units from './core/screens/home/Units';
import UnitDetails from './core/screens/home/UnitDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const createHistory = createBrowserHistory();

function App() {
  // @ts-ignore
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}>
            {' '}
          </Route>
          <Route path="units" element={<Units />} />
          <Route path="units/:id" element={<UnitDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
