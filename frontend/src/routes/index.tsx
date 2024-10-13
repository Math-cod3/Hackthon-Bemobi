import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
// import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/login" element={<Login />} /> */}
    {/* Outras rotas */}
  </Switch>
);

export default Routes;
