import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const getTrend = () => `${(Math.random() * (5 - -5) + -5).toFixed(2)}%`;

app.get('/api/system-telemetry', (req: Request, res: Response) => {
    res.json({
        timestamp: new Date().toISOString(),
        status: 'OPERATIONAL',
        market_trend: getTrend(),
        active_nodes: Math.floor(Math.random() * (1000 - 800) + 800),
        system_load: `${Math.floor(Math.random() * 30)}%`
    });
});


app.get('/api/finance/market-overview', (req: Request, res: Response) => {
    res.json([
        { id: '1', asset: 'S&P 500', price: 5234.10, change: getTrend() },
        { id: '2', asset: 'BTC/USD', price: 64231.50, change: getTrend() },
        { id: '3', asset: 'GOLD', price: 2341.20, change: '+0.12%' },
        { id: '4', asset: 'DXY (Dollar Index)', price: 104.20, change: '-0.05%' }
    ]);
});


app.get('/api/news', (req: Request, res: Response) => {
    res.json([
        {
            id: 1,
            title: "Global Markets Brace for Inflation Data",
            source: "Economic Insights",
            urgency: "HIGH"
        },
        {
            id: 2,
            title: "Tech Sector Sees Surge in AI Infrastructure Investment",
            source: "Future Pulse",
            urgency: "MEDIUM"
        },
        {
            id: 3,
            title: "Central Bank Maintains Interest Rates",
            source: "Financial Times",
            urgency: "LOW"
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`
     [SYSTEM_ONLINE]
     Active on: http://localhost:${PORT}
    `);
});