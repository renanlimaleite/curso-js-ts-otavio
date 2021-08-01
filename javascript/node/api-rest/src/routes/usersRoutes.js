import { Router } from 'express'
import loginRequired from '../middlewares/loginRequired'
import userController from '../controllers/UserController'


const router = new Router()

// Não deveriam existir
router.get('/', loginRequired, userController.index) // Lista usuário
router.get('/:id', userController.show) // Lista usuário

router.post('/', loginRequired, userController.store) // Não precisamos de token aqui, porque o acesso é global.
router.put('/', loginRequired, userController.update) // Somente logado.
router.delete('/', loginRequired, userController.delete) // Somento logado.

export default router

/**
 * index -> lista todos users
 * store/create -> cria user
 * delete -> apaga 1 usuario
 * show -> mostra 1 user
 * update -> atualiza 1 user
 */
