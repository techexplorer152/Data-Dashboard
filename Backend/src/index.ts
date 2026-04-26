import express from 'express';
import cors from 'cors';
import telemetryRoutes from './routes/telemetryRoutes';

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', telemetryRoutes);

const PORT = 5000;
app.get('/', (req, res) => {
    res.json({
        message: "SYSTEM_UPLINK_STABLE",
        version: "1.0.0",
        endpoints: ["/api/system-telemetry"]
    });
});
app.listen(PORT, () => {
    console.log(`[SYSTEM_ONLINE]: Relay active on http://localhost:${PORT}`);
});