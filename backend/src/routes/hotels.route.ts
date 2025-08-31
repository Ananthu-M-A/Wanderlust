import express from 'express';
import verifyToken from '../middlewares/auth.middleware';
import { blockHotel, createHotel, loadHotel, loadHotels, unblockHotel, updateHotel } from '../controllers/hotels.controller';
import { body } from 'express-validator';
import multer, { Multer } from 'multer';
const hotelsRouter = express.Router();

const storage = multer.memoryStorage();
const upload: Multer = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }
});

hotelsRouter.get('/', verifyToken, loadHotels);
hotelsRouter.post('/create-hotel',
    [
        body("name").notEmpty().withMessage('Name is required'),
        body("city").notEmpty().withMessage('City is required'),
        body("country").notEmpty().withMessage('Country is required'),
        body("description").notEmpty().withMessage('Description is required'),
        body("type").notEmpty().withMessage('Type is required'),
        body("facilities").notEmpty().isArray().withMessage('Facilities is required'),
    ],
    upload.array("imageFiles", 3),
    verifyToken, createHotel);
hotelsRouter.get('/:hotelId', verifyToken, loadHotel);
hotelsRouter.put('/:hotelId/update',
    upload.array("imageFiles"),
    verifyToken, updateHotel);
hotelsRouter.put('/:hotelId/block', verifyToken, blockHotel);
hotelsRouter.put('/:hotelId/unblock', verifyToken, unblockHotel);


export default hotelsRouter;