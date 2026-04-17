import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

const PORT = 5000;


app.get('/api/system-telemetry', async (req: Request, res: Response) => {
    try {
        const telemetryData = {
            timestamp: new Date().toISOString(),
            status: 'OPERATIONAL',
            market_trend: '+2.45%',
            active_nodes: Math.floor(Math.random() * 1000),
            system_load: '14%'
        };

        res.json(telemetryData);
    } catch (error) {
        res.status(500).json({ error: 'UPLINK_CRITICAL_FAILURE' });
    }
});