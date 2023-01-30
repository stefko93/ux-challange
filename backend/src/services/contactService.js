import { contactModel } from '../models/contactModel';

export const contactService = {
    async getContacts() {
        const results = await contactModel.getAllContacts();
        return results
    },
    async addContact(req) {
        const { name, phone, email, avatar } = req.body;
        console.log(avatar)
        const result = await contactModel.addContact(name, phone, email, avatar);
        return result;
    },
    async getContactById(req) {
        const { id } = req.params;
        const result = await contactModel.getContactById(id);
        return result[0];
    },
    async modifyContact(req) {
        const { name, phone, email, avatar } = req.body;
        const { id } = req.params;
        await validateInput(name, phone, email);
        await contactModel.modifyContact(name, phone, email, avatar, id);
        const result = await contactModel.getContactById(id)
        return result;
    },
    async deleteContact(req) {
        const { id } = req.params;
        const result = await contactModel.getContactById(id)
        await contactModel.deleteContact(id)
        return result[0];
    }
    
};

async function validateInput(name, phone, email) {
     if(!name || !phone || !email ){
        throw Error('All fields are required.');
      } 
  }