import { contactModel } from '../models/contactModel';

export const calculatorService = {
    async getContacts() {
        const results = await contactModel.getAllContacts();
        return {success: results}
    },
    async addContact(req) {
        const { name, phone, email, avatar } = req.body;
        await validateInput(name, phone);
        const result = await contactModel.addContact(name, phone, email, avatar);
        return {success: result}
    },
    async modifyContact(req) {
        const { name, phone, email, avatar } = req.body;
        const { id } = req.params;
        await validateInput(name, phone);
        const result = await contactModel.modifyContact(id, name, phone, email, avatar);
        return {success: result}
    },
    async deleteContact(req) {
        const { id } = req.params;
        const result = await contactModel.deleteContact(id);
        return {success: 'Contact successfully deleted!'}
    }
};

async function validateInput(name, phone, email, avatar) {
    if (!name || !phone || !email || !avatar){
      throw Error('Name and email fields are required.');
    } else if(!name){
        throw Error('Name field is required.');
    } else{
        throw Error('Phone field is required.')
    }
  }