import contactService from "./contacts.js";

// const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contact = await contactService.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const addContact = await contactService.addContact(name, email, phone);
      console.log(addContact);
      break;

    case "remove":
      const removeContact = await contactService.removeContact(id);

      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);

// invokeAction({ action: "list" });
invokeAction({action: "remove",  id: "hcLPbQWfbrHMKUbDFOvZ9"})
// invokeAction({action: "add",  name: 'qweqwe', email: 'qweqwer@Comment.ua', phone: '213123123'})
