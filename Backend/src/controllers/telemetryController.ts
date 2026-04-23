import { Request, Response } from 'express';
import * as TelemetryService from '../services/telemetryService';

export const getTelemetry = (req: Request, res: Response) => {
    try {
        const data = TelemetryService.getSystemStatus();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'UPLINK_CRITICAL_FAILURE' });
    }
};