import { DELETE_CLIENT, FETCH_CLIENTS, FETCH_CLIENTS_SUCCESS, UPDATE_CLIENT, UPDATE_CLIENT_SUCCESS } from "redux/constants/Clients";

const initState = {
    isLoading: false,
    clients: [],
}

const clients = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CLIENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                clients: [...action.payload]
            }
        case DELETE_CLIENT:
            const index = state.clients.findIndex((client) => client.id === action.payload)
            const updateclients = [...state.clients]
            updateclients.splice(index, 1)
            return {
                ...state,
                clients: [...updateclients]
            }
        case UPDATE_CLIENT:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_CLIENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                clients: [...state.clients]
            }
        default:
            return state;
    }
}

export default clients