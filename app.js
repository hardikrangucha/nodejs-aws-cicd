const express = require('express');
const app = express();

// Config
const PORT = process.env.PORT || 3000;
const APP_NAME = 'Node.js CI/CD Showcase';
const APP_VERSION = 'v1.0.0';

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${APP_NAME}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    * {
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      margin: 0;
      height: 100vh;
      background: linear-gradient(-45deg, #1d2671, #c33764, #1d2671, #283c86);
      background-size: 400% 400%;
      animation: gradientBG 12s ease infinite;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .glass-card {
      width: 90%;
      max-width: 520px;
      padding: 40px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(14px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      text-align: center;
      animation: fadeIn 1.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    h1 {
      margin-bottom: 10px;
      font-size: 2.2rem;
    }

    .subtitle {
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 25px;
    }

    .info {
      text-align: left;
      margin: 20px 0;
      background: rgba(0,0,0,0.25);
      padding: 18px;
      border-radius: 12px;
    }

    .info p {
      margin: 8px 0;
      font-size: 0.95rem;
    }

    .badge {
      margin-top: 20px;
      display: inline-block;
      padding: 10px 22px;
      border-radius: 30px;
      background: linear-gradient(135deg, #00e676, #00c853);
      color: #000;
      font-weight: bold;
      letter-spacing: 0.5px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.3);
    }

    footer {
      margin-top: 25px;
      font-size: 0.85rem;
      opacity: 0.8;
    }

    .pulse {
      animation: pulse 1.6s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.06); }
      100% { transform: scale(1); }
    }
  </style>
</head>

<body>
  <div class="glass-card">
    <h1>🚀 Deployment Successful</h1>
    <div class="subtitle">Your CI/CD pipeline is working perfectly</div>

    <div class="info">
      <p><strong>App Name:</strong> ${APP_NAME}</p>
      <p><strong>Version:</strong> ${APP_VERSION}</p>
      <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
      <p><strong>Server Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Port:</strong> ${PORT}</p>
    </div>

    <div class="badge pulse">CI/CD VERIFIED ✅</div>

    <footer>
      Powered by AWS CodePipeline · CodeBuild · CodeDeploy
    </footer>
  </div>
</body>
</html>
`);
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Application is healthy',
    app: APP_NAME,
    version: APP_VERSION,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} running on port ${PORT}`);
});