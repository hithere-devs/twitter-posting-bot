import { Request, Response, NextFunction } from 'express';
import { AppError } from '../middlewares/errorHandler';

export const healthCheck = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		// Simulate random error
		if (Math.random() > 0.8) {
			throw new AppError('Health check failed randomly', 500);
		}

		res.status(200).json({ status: 'Server is running smoothly' });
	} catch (error) {
		next(error); // Pass the error to the error handler
	}
};
