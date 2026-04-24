
export const getSystemStatus = () => {
    return {
        timestamp: new Date().toISOString(),
        status: 'OPERATIONAL',
        market_trend: `${(Math.random() * 5).toFixed(2)}%`,
        active_nodes: Math.floor(Math.random() * 1000),
        system_load: `${Math.floor(Math.random() * 30)}%`
    };
};