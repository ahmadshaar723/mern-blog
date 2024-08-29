import express from 'express';
import { deleteUser, signout, test,getUsers } from '../controllers/user.controller.js';
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',test);
router.put('/update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);
router.get('/getusers',verifyToken,getUsers)
router.post('/signout',signout)

  export default router;