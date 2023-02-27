import {urlIns} from "./urlIns";


class Api {
    getCon = async() => {
        try {
            const resp = await urlIns.get('contacts.json')
                return await resp.data
        }catch (e) {
            console.log(e)
        }
    }
}
export const apiContacts = new Api()