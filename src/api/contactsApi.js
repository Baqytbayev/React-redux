import {contactsInstances} from "./contactsInstances";


class ContactsApi {
    addContact = async (contact) => {
        try {
            await contactsInstances.post('contacts.json', contact)
        } catch (e) {
            console.log(e)
        }
    }
    getContact = async () => {
        try {
            const response = await contactsInstances.get('contacts.json')
            return response.data
        }catch (e) {
            console.log(e)
        }
    }
    getContactById = async (id) => {
        try {
            const responce = await contactsInstances.get(`/contacts/${id}.json`)
            return responce.data
        }catch (err) {
            console.log(err)
        }
    }
    remove = async (key) => {
        await contactsInstances.delete(`contacts/${key}.json`)
    }
    updateContacts = async (id, contact) => {
        try {
            await contactsInstances.put(`/contacts/${id}.json`, contact)
        } catch (err) {
            console.log(err)
        }
    }

}

export const contactsApi = new ContactsApi();