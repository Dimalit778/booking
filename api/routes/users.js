import express from 'express';
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controllers/userCont.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
// /// # CHECK IF YOU HAVE A TOKEN #//
// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('hello user, you are in');
// });
// /// # CHECK IF YOU HAVE A TOKEN MATCH YOUR ID #//
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, you can delete your account');
// });
// /// # CHECK IF YOU ARE ADMIN #//
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello Admin, you can do anything');
// });

//UPDATE
router.put('/:id', verifyUser, updateUser);
//DELETE
router.delete('/:id', verifyUser, deleteUser);
//GET
router.get('/:id', verifyUser, getUser);
//GET ALL
router.get('/', verifyAdmin, getAllUser);

export default router;
