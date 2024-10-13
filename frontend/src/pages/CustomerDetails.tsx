import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import CommunicationHistory from '../components/CommunicationHistory';
import SendMessage from '../components/SendMessage';
import EditCustomerForm from '../components/EditCustomerForm';

// Importe a interface Customer
import { Customer } from '../interfaces/Customer';

const CustomerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    api.get(`/customers/${id}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdateCustomer = (updatedCustomer: Customer) => {
    setCustomer(updatedCustomer); // Atualiza o estado com os dados atualizados
  };

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

      {/* Formulário para editar o cliente */}
      <EditCustomerForm customer={customer} onUpdate={handleUpdateCustomer} />

      {/* Outros componentes */}
      <SendMessage customerId={customer.id} />
      <CommunicationHistory customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
