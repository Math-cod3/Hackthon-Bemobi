import React, { useEffect, useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

interface Metrics {
  retentionRate: number;
  churnReduction: number;
  virtualAssistantEngagement: number;
  crossSellingIncrease: number;
  npsScore: number;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    api.get('/metrics')
      .then(response => setMetrics(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!metrics) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Title>Dashboard de Métricas</Title>
      <p>Taxa de Retenção: {metrics.retentionRate}%</p>
      <p>Redução de Churn: {metrics.churnReduction}%</p>
      <p>Engajamento com Assistente Virtual: {metrics.virtualAssistantEngagement}%</p>
      <p>Aumento nas Vendas Cruzadas: {metrics.crossSellingIncrease}%</p>
      <p>Satisfação do Cliente (NPS): {metrics.npsScore}</p>
      {/* Implementar gráficos e visualizações detalhadas */}
    </Container>
  );
};

export default Dashboard;
