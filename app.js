const express = require('express');
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;
const APP_NAME = 'Node.js CI/CD Demo App';
const APP_VERSION = 'v1.0.0';

// Middleware
app.use(express.json());

// Home route (UI)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${APP_NAME}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: rgba(0, 0, 0, 0.35);
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          }
          h1 {
            margin-bottom: 10px;
          }
          p {
            margin: 6px 0;
          }
          .badge {
            margin-top: 15px;
            display: inline-block;
            padding: 6px 14px;
            border-radius: 20px;
            background: #00e676;
            color: #000;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Deployment Successful!</h1>
          <p><strong>${APP_NAME}</strong></p>
          <p>Version: ${APP_VERSION}</p>
          <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
          <p>Server Time: ${new Date().toLocaleString()}</p>
          <span class="badge">CI/CD Working ✅</span>
        </div>
      </body>
    </html>
  `);
});

// Health check (for ALB / CodeDeploy)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    app: APP_NAME,
    version: APP_VERSION,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} running on port ${PORT}`);
});