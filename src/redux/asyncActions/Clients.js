import axios from "axios"
import { FETCH_CLIENTS, FETCH_CLIENTS_SUCCESS, UPDATE_CLIENT, UPDATE_CLIENT_SUCCESS } from "redux/constants/Clients";

const API_URL = 'https://jsonplaceholder.typicode.com'

export const fetchClients = () => {
    return async dispatch => {
        try {
            dispatch({type: FETCH_CLIENTS});
            const response = await axios.get(`${API_URL}/users`);
            dispatch({type: FETCH_CLIENTS_SUCCESS, payload: response.data});
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateClient = () => {
    return async dispatch => {
        try {
            dispatch({type: UPDATE_CLIENT});
            setTimeout(() => {
                dispatch({type: UPDATE_CLIENT_SUCCESS});
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    }
} 