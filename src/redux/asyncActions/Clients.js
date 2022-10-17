import axios from "axios"
import { env } from "configs/EnvironmentConfig"
import { FETCH_CLIENTS, FETCH_CLIENTS_SUCCESS } from "redux/constants/Clients";

export const fetchClients = () => {
    return async dispatch => {
        try {
            dispatch({type: FETCH_CLIENTS});
            const response = await axios.get(`${env.API_ENDPOINT_URL}/users`);
            dispatch({type: FETCH_CLIENTS_SUCCESS, payload: response.data});
        } catch (error) {
        console.log(error);
        }
    }
} 