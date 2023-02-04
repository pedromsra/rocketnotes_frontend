//configurações axios

import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-l3fa.onrender.com" //URL deve sempre ser maiusculo
});