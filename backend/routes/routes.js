import express from 'express';
import { signUpUser,loginUser,uploadData,getBikes,getBikeDetails,getMyUploads,UpdateData,UpdateDataofbike,DeleteItem } from '../controllers/user-controller.js';

const router = express.Router();

router.post('/signup',signUpUser)
router.post('/login',loginUser)
router.post('/uploadBike',uploadData)
router.get('/bike',getBikes)
router.get('/items/:id',getBikeDetails)
router.get('/myuploads/:id',getMyUploads)
router.get('/updateData/:id',UpdateData)
router.put('/update/:id',UpdateDataofbike)
router.delete('/delete/:id',DeleteItem)

export default router