import axios from "axios";
import {url} from "./url";

export const urlIns = axios.create({
    baseURL: url
})