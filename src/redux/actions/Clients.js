import { DELETE_CLIENT } from "redux/constants/Clients";

export const deleteClient = (payload) => ({
    type: DELETE_CLIENT,
    payload
})