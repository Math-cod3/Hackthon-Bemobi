import app from './app';
import config from '../config';

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
