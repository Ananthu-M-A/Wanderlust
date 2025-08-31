import express from 'express';
import verifyToken from '../middlewares/auth.middleware';
import { loadBookingDetails, loadBookings } from '../controllers/bookings.controller';

const bookingsRouter = express.Router();

bookingsRouter.get('/', verifyToken, loadBookings);
bookingsRouter.get('/:bookingId', verifyToken, loadBookingDetails);

export default bookingsRouter;