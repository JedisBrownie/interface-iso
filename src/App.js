import { BrowserRouter , Navigate , Route , Routes } from 'react-router-dom';
import './assets/fomantic/dist/semantic.css';
import {routes} from './route';
import React, { Suspense, useEffect, useState } from "react";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          {routes.map((route, index) =>
            <Route
              key={"route-" + index}
              path={route.path}
              element={route.element}
            />
          )}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
