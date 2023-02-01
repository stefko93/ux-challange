import { contactService } from '../services/contactService';

export const contactController = {
  async getContacts(req, res, next) {
    try {
      const data = await contactService.getContacts();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  },
  async addContact(req, res, next) {
    try {
      const data = await contactService.addContact(req);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  },
  async getContactById(req, res, next) {
    try {
      const data = await contactService.getContactById(req);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  },
  async modifyContact(req, res, next) {
    try {
      const data = await contactService.modifyContact(req);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  },
  async deleteContact(req, res, next) {
    try {
      const data = await contactService.deleteContact(req);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  },
};
