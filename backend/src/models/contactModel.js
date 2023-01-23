import { db } from '../data/connection';

export const calculatorModel = {
  async getAllContacts() {
    const getNumberSQL = 'SELECT * FROM contact;';
    const result = await db.query(getNumberSQL, id);
    return result.results;
  },
  async addContact(name, phone, email, avatar) {
    const getNumberSQL = 'INSERT INTO contact (name, phone, email, avatar) VALUES (?, ?, ?, ?);';
    const result = await db.query(getNumberSQL, [name, phone, email, avatar]);
    return result.results;
  },
  async modifyContact(name, phone, email, avatar, id) {
    const modifySQL = 'UPDATE contact SET name=?, phone=?, email=?, avatar=? WHERE id=?;';
    const result = await db.query(modifySQL, [name, phone, email, avatar, id]);
    return result.results;
  },
  async deleteContact(id) {
    const deleteSQL = 'DELETE FROM contact WHERE id=?;';
    const result = await db.query(deleteSQL, [id]);
    return result.results;
  }
};
