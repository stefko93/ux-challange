import { contactModel } from '../models/contactModel';

export const contactService = {
    async getContacts() {
        const results = await contactModel.getAllContacts();
        return {data: results}
    },
    async addContact(req) {
        const { name, phone, email, avatar } = req.body;
        await validateInput(name, phone, email, avatar);
        const result = await contactModel.addContact(name, phone, email, avatar);
        return {data: result}
    },
    async modifyContact(req) {
        const { name, phone, email, avatar } = req.body;
        const { id } = req.params;
        await validateInput(name, phone, email, avatar);
        const result = await contactModel.modifyContact(name, phone, email, avatar, id);
        return {data: result}
    },
    async deleteContact(req) {
        const { id } = req.params;
        const result = await contactModel.deleteContact(id);
        return {data: result}
    }
};

async function validateInput(name, phone, email, avatar) {
     if(!name || !phone || !email || !avatar){
        throw Error('All fields are required.');
      } 
  }