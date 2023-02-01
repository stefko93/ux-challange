import { db } from '../data/connection';

export const contactModel = {
  async getAllContacts() {
    const getContactSQL = `SELECT * FROM contact`;
    const result = await db.query(getContactSQL);
    return result.results;
  },
  async addContact(name, phone, email, avatar) {
    const addContactSQL = `INSERT INTO contact (name, phone, email, avatar) VALUES (?, ?, ?, ?)`;
    await db.query(addContactSQL, [name, phone, email, avatar]);
    const getLastInserted = `SELECT * FROM contact WHERE id=LAST_INSERT_ID()`;
    const result = await db.query(getLastInserted);
    return result.results[0];
  },
  async getContactById(id) {
    const getContactSQL = `SELECT * FROM contact WHERE id=?`;
    const result = await db.query(getContactSQL, [id]);
    return result.results;
  },
  async modifyContact(name, phone, email, avatar, id) {
    const modifyContactSQL = `UPDATE contact SET name=?, phone=?, email=?, avatar=? WHERE id=?`;
    const result = await db.query(modifyContactSQL, [
      name,
      phone,
      email,
      avatar,
      id,
    ]);
    return result.results;
  },
  async deleteContact(id) {
    const deleteContactSQL = `DELETE FROM contact WHERE id=?`;
    const result = await db.query(deleteContactSQL, [id]);
    return result.results;
  },
};
