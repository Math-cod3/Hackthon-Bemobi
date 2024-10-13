import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import CommunicationHistory from '../components/CommunicationHistory';
import SendMessage from '../components/SendMessage';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  paymentMethod: string;
  preferredChannel: string;
  status: string;
}

const CustomerDetails: React.FC = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    api.get(`/customers/${id}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!customer) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{customer.name}</h1>
      <p>E-mail: {customer.email}</p>
      <p>Telefone: {customer.phone}</p>
      <p>Método de Pagamento: {customer.paymentMethod}</p>
      <p>Canal Preferido: {customer.preferredChannel}</p>
      <p>Status: {customer.status}</p>
      <SendMessage customerId={customer.id} />
      <CommunicationHistory customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
