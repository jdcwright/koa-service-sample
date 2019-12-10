export const PORT: number = 3000;
export const LOG_LEVEL: string = process.env.LOG_LEVEL || 'debug';
export const API_URL: string = process.env.API_URL || '';

// Database Configuration
export const dbhost = process.env.DB_HOST || '';
export const dbuser = process.env.DB_USER || '';
export const dbport = process.env.DB_PORT || '5432';
export const dbpassword = process.env.DB_PASSWORD || '';
export const db = process.env.DATABASE || '';
export const dbPoolMin = parseInt(process.env.DB_POOL_MIN || '2', 10);
export const dbPoolMax = parseInt(process.env.DB_POOL_MAX || '30', 10);
