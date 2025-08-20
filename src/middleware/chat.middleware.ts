import type { Request, Response, NextFunction } from 'express'
import jwt from 'json-web-token'

declare global {
    namespace Express {
        interface Request {
            user?: any; 
        }
    }
}

const chatMiddleware = {
    validateToken: (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers['authorization']
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        // Verify token
        jwt.decode(token, process.env.TOKEN_SECRET_KEY as string, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' })
            }
            req.user = decoded
            next()
        })
    }
}
export default chatMiddleware