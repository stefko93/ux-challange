import express from 'express';
import cors from 'cors';

import { contactController } from '../controllers/contactController';

const router = express.Router();

router.use(cors());
router.use(express.json());

//GET ALL CONTACTS
router.get('/contacts', contactController.getContacts);

//GET CONTACT BY ID
router.get('/contact/:id', contactController.getContactById);

// ADD CONTACT
router.post('/contact', contactController.addContact);

// UPDATE CONTACT
router.put('/contacts/:id', contactController.modifyContact);

// DELETE CONTACT
router.delete('/contact/:id', contactController.deleteContact);

export default router;
