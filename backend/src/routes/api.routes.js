import express from 'express';
import cors from 'cors';

import { contactController } from '../controllers/contactController';

const router = express.Router();

router.use(cors());
router.use(express.json());

//GET ALL CONTACTS
router.get('/contacts', contactController.getContacts);

// ADD CONTACT
router.post('/contact', contactController.addContact);

// UPDATE CONTACT
router.put('/contact/:id', contactController.modifyContact);

// DELETE CONTACT
router.delete('/contact/:id', contactController.deleteContact);


export default router;