import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
}

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    api.get('/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>
                <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
              </td>
              <td>{customer.email}</td>
              <td>{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
