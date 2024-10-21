import { BrowserRouter , Navigate , Route , Routes } from 'react-router-dom';
import './assets/fomantic/dist/semantic.css';
import {routes} from './route';
import React, { Suspense, useEffect, useState } from "react";
// require('dotenv').config()


// PAGE
const Auth = React.lazy(() => import('./page/Auth/Auth'));
const Home = React.lazy(() => import('./page/Home/Home'));
const Brouillon = React.lazy(() => import('./page/Brouillon/Brouillon'));
const CreationJodit = React.lazy(() => import('./page/Creation/CreationJodit'));
const DocumentValable = React.lazy(() => import('./page/Home/DocumentValable'));
const Edition = React.lazy(() => import('./page/Creation/Edition'));

const Shared = React.lazy(() => import('./components/shared/index'));

function App() {
  

  return (
    // <Suspense fallback={null}>
    //   <Router>
    //     <Routes>
    //         <Route path='/' element = {true ? 
    //           <Shared></Shared> : 
    //           <Navigate to = "/login"></Navigate>
    //         }>
    //           <Route path='/login' element={Auth}></Route>
    //           <Route path='/home' element={Home}></Route>
  
    //           <Route exact path = '/valable/:identifiant' element={DocumentValable}></Route>
              
    //           <Route exact path='/jodit' element={CreationJodit}></Route>
    //           <Route exact path = '/creation/:type' element={Edition}></Route>
    //           <Route path='/brouillon' element={Brouillon}></Route>


    //           <Route path="/*" element={<Navigate to="/" replace />} />
    //         </Route>
    //         <Route path="*" element={<Navigate to="/" replace />} />

    //     </Routes>
    //   </Router>
    // </Suspense>

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
