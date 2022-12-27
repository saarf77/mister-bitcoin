import { contactService } from "../../services/contactService";

export function loadContacts() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().contactModule;
      const contacts = await contactService.getContacts(filterBy);
      dispatch({ type: "SET_CONTACTS", contacts });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function loadCurrContact(contactId) {
  return async (dispatch, getState) => {
    try {
      const contact = await contactService.getContactById(contactId);
      dispatch({ type: "SET_CONTACT", contact });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function removeContact(contactId) {
  return async (dispatch, getState) => {
    try {
      await contactService.deleteContact(contactId);
      dispatch({ type: "REMOVE_CONTACT", contactId });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function saveContact(contact) {
  return async (dispatch, getState) => {
    try {
      const savedContact = await contactService.saveContact(contact);
      contact._id
        ? dispatch({ type: "UPDATE_CONTACT", savedContact })
        : dispatch({ type: "ADD_CONTACT", savedContact });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: "SET_FILTER_BY", filterBy });
  };
}
