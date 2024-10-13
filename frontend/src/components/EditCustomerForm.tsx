import React, { useState } from 'react';
import api from '../services/api';
import { Customer } from '../interfaces/Customer';

interface EditCustomerFormProps {
  customer: Customer;
  onUpdate: (updatedCustomer: Customer) => void;
}

const EditCustomerForm: React.FC<EditCustomerFormProps> = ({ customer, onUpdate }) => {
  const [formData, setFormData] = useState<Customer>(customer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.put(`/customers/${customer.id}`, formData);
      onUpdate(response.data);
      alert('Cliente atualizado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar cliente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      {/* Outros campos */}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditCustomerForm;
