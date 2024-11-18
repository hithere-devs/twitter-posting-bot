// src/app.ts
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes'; // Import the central route handler
import { errorHandler, AppError } from './middlewares/errorHandler';

const app: Application = express();

// Security middleware
app.use(helmet());

// HTTP request logger middleware
app.use(morgan('combined'));

// Parse incoming JSON requests
app.use(express.json());

// Use all defined routes
app.use('/', routes);

// Catch unhandled routes
app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(errorHandler);

export default app;
