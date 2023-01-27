export const saveContact = async (contact) => {
    const response = await fetch(`${process.env.REACT_APP_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    if (!response.ok) {
      throw new Error(response);
    }
    return await response.json();
  };

export const getContactById = async (contactId) => {
    if (!contactId) return;
    const response = await fetch(`${process.env.REACT_APP_URL}/api/contacts/${contactId}`);
    if (!response.ok) {
      throw new Error(response);
    }
    return await response.json();
  };
  
  export const editContact = async (contact) => {
    if (!contact.id) return;
    const response = await fetch(`${process.env.REACT_APP_URL}/api/contacts/${contact.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    if (!response.ok) {
      throw new Error(response);
    }
    return await response.json();
  };
  
  export const deleteContactById = async (contactId) => {
    if (!contactId) return;
    const response = await fetch(`${process.env.REACT_APP_URL}/api/contact/${contactId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(response);
    }
    return await response.json();
  };
  

  
 
  