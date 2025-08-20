import {Router} from 'express'
import { ChatController } from '../controllers/chatController.js'
import chatMiddleware from '../middleware/chat.middleware.js'

const router = Router()

router.get('/messages', chatMiddleware.validateToken, ChatController.getMessages)
router.post('/messages', chatMiddleware.validateToken, ChatController.sendMessage)

export default router
