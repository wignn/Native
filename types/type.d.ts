export interface Candle {
    symbol: string;
    open: number;
    close: number;
    low: number;
    timestamp: number;
}


export interface WsCandleUpdate {
    updateType: "live" | "closed"
    candle: Candle
}