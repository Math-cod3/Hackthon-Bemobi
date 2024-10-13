import React, { useState } from 'react';
import api from '../services/api';

interface SendMessageProps {
  customerId: number;
}

const SendMessage: React.FC<SendMessageProps> = ({ customerId }) => {
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    try {
      await api.post(`/customers/${customerId}/send-message`, { message });
      alert('Mensagem enviada com sucesso!');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar mensagem');
    }
  };

  return (
    <div>
      <h2>Enviar Mensagem</h2>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={5}
        cols={50}
        placeholder="Digite a mensagem..."
      />
      <br />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default SendMessage;
