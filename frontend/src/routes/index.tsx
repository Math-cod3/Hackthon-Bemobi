import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Customers from '../pages/Customers';
import CustomerDetails from '../pages/CustomerDetails';
import Settings from '../pages/Settings';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route
      path="/customers"
      element={
        <PrivateRoute>
          <Customers />
        </PrivateRoute>
      }
    />
    <Route
      path="/customers/:id"
      element={
        <PrivateRoute>
          <CustomerDetails />
        </PrivateRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      }
    />
  </Switch>
);

export default Routes;
