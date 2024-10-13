// backend/config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  jira: {
    url: process.env.JIRA_URL,
    username: process.env.JIRA_USERNAME,
    apiToken: process.env.JIRA_API_TOKEN,
  },
  payment: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    pixKey: process.env.PIX_KEY,
  },
};
