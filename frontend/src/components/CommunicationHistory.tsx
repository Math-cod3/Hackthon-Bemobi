import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Communication {
  id: number;
  date: string;
  channel: string;
  message: string;
}

interface CommunicationHistoryProps {
  customerId: number;
}

const CommunicationHistory: React.FC<CommunicationHistoryProps> = ({ customerId }) => {
  const [communications, setCommunications] = useState<Communication[]>([]);

  useEffect(() => {
    api.get(`/customers/${customerId}/communications`)
      .then(response => setCommunications(response.data))
      .catch(error => console.error(error));
  }, [customerId]);

  return (
    <div>
      <h2>Histórico de Comunicações</h2>
      <ul>
        {communications.map(comm => (
          <li key={comm.id}>
            <p>Data: {comm.date}</p>
            <p>Canal: {comm.channel}</p>
            <p>Mensagem: {comm.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationHistory;
