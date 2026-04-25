import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(`[SYSTEM_ERROR]: ${err.stack}`);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'INTERNAL_SERVER_ERROR',
        code: err.code || 'UPLINK_FAILURE'
    });
};