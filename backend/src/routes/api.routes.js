import express from 'express';
import cors from 'cors';

const router = express.Router();

router.use(cors());
router.use(express.json());

//GET ALL CONTACTS
router.get();

// ADD CONTACT
router.post();

// UPDATE CONTACT
router.put();

// DELETE CONTACT
router.delete();


export default router;