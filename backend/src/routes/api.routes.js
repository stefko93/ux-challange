import express from 'express';
import cors from 'cors';

import { contactController } from '../controllers/contactController';

const router = express.Router();

router.use(cors());
router.use(express.json());

//GET ALL CONTACTS
router.get('/contacts', contactController.getContacts);

// ADD CONTACT
router.post('/contacts', contactController.addContact);

// UPDATE CONTACT
router.put('/contacts:id', contactController.modifyContact);

// DELETE CONTACT
router.delete('/contacts:id', contactController.deleteContact);


export default router;