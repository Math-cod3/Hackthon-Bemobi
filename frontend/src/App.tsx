import React from 'react';
import Routes from './routes';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes />
      <ToastContainer/>
    </Layout>
  );
};

export default App;
