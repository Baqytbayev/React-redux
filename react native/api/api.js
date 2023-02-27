import {instances} from "./instances";


class Api {
    get = async() => {
        try {
            const response = await instances.get('contacts.json')
            return response.data
        }catch (e) {
            console.log(e)
        }
    }
}
export const api = new Api();