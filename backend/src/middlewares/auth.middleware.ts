import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import '../interfaces/session.interface';
import User from "../models/user.model";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const adminToken = req.cookies["admin_token"];
        if (adminToken) {
            const decoded = jwt.verify(adminToken, process.env.JWT_SECRET_KEY as string);
            req.adminId = (decoded as JwtPayload).adminId;
            return next();
        }
        const userToken = req.cookies["auth_token"];
        if (!userToken) {
            console.log("Unauthorized: No token provided");
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(userToken, process.env.JWT_SECRET_KEY as string);
        const userActivityStatus = await User.findOne({ _id: (decoded as JwtPayload).userId }, { isBlocked: 1, _id: 0 });
        if (userActivityStatus && userActivityStatus.isBlocked) {
            console.log("User blocked");
            return res.status(401).json({ message: "User blocked" });
        }
        req.userId = (decoded as JwtPayload).userId;
        next();
    } catch (error) {
        console.log("Unauthorized", error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default verifyToken;
