// frontend/src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    axios.get('/api/metrics')
      .then(response => setMetrics(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Dashboard de Métricas</h1>
      <p>Taxa de Retenção: {metrics.retentionRate}%</p>
      <p>Redução de Churn: {metrics.churnReduction}%</p>
      <p>Engajamento com Assistente Virtual: {metrics.virtualAssistantEngagement}%</p>
      <p>Aumento nas Vendas Cruzadas: {metrics.crossSellingIncrease}%</p>
      <p>Satisfação do Cliente (NPS): {metrics.npsScore}</p>
      {/* Outros componentes e visualizações */}
    </div>
  );
}

export default Dashboard;
