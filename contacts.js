
import fs from "fs/promises"
import { nanoid } from "nanoid"
import path from "path"

const contactsPath = path.resolve("db", "contacts.json")

// const getAllContacts = async () => {
//     const data = await fs.readFile(contactsPath)
//     return JSON.parse(data)
// }


async function listContacts() {
    const data = await fs.readFile(contactsPath)
    return JSON.parse(data)
  }
  
 async function getContactById(contactId) {
    const contacts = await listContacts()
    const sesult = contacts.find(contact => contact.id === contactId)
    return sesult || null
  }
  
 async function removeContact(contactId) {
    const contacts = await listContacts() 
    const index = contacts.findIndex(contact => contact.id == contactId)
    console.log('index', index);
    
    if(index === -1) {
        return null
    }
    const [result] = contacts.splice(index, 1)
    console.log('result', result);
    
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return result
 }
  
 async function addContact(name, email, phone) {
    const contacts = await listContacts()
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone, 
    }
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newContact

  }


  export default {
    listContacts,
    getContactById,
    removeContact,
    addContact

  }