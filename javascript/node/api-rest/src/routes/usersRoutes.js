import { Router } from 'express'
import loginRequired from '../middlewares/loginRequired'
import userController from '../controllers/UserController'


const router = new Router()

router.post('/', userController.store)
router.get('/', loginRequired, userController.index)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router

/**
 * index -> lista todos users
 * store/create -> cria user
 * delete -> apaga 1 usuario
 * show -> mostra 1 user
 * update -> atualiza 1 user
 */
