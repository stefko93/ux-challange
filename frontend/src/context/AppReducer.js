const AppReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS': {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'GET_CONTACT': {
      return {
        ...state,
        contact: action.payload,
      };
    }
    case 'UPDATE_CONTACT':
      const { id, name, phone, email, avatar } = action.payload[0];
      state.contacts.forEach((contact) => {
        if (contact.id === id) {
          contact.name = name;
          contact.phone = phone;
          contact.email = email;
          contact.avatar = avatar;
        }
      });
      return {
        ...state,
        contacts: [...state.contacts],
        contact: state.contact,
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default AppReducer;
