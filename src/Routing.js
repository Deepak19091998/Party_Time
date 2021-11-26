import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import PnrNumber from './components/screens/PnrNumber';
import Tickets from './components/screens/Tickets';

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" >
          <Route index element={<PnrNumber />} />
          <Route path="ticket" element={<Tickets />} />
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default Routing;
