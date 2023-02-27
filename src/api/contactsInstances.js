import axios from "axios";
import {baseUrl} from "./baseUrl";


export const contactsInstances = axios.create({
    baseURL: baseUrl
})