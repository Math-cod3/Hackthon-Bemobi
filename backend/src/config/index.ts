import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'sua_chave_secreta',
  db: {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'seu_banco_de_dados',
    username: process.env.DB_USER || 'seu_usuario',
    password: process.env.DB_PASSWORD || 'sua_senha',
    dialect: 'postgres',
  },
  jira: {
    url: process.env.JIRA_URL || '',
    username: process.env.JIRA_USERNAME || '',
    apiToken: process.env.JIRA_API_TOKEN || '',
  },
  payment: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    pixKey: process.env.PIX_KEY || '',
  },
};
