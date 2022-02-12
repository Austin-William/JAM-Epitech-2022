import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Error from './pages/Error';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route
              path="*"
              element={<Error />}
              options={{ status: 404 }}
            />
        </Routes>
    </BrowserRouter>,
  rootElement
);