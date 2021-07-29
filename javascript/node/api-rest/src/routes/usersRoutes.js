import { Router } from 'express'
import userController from '../controllers/UserController'

const router = new Router()

router.post('/', userController.store)

export default router

/**
 * index -> lista todos users
 * store/create -> cria user
 * delete -> apaga 1 usuario
 * show -> mostra 1 user
 * update -> atualiza 1 user
 */
