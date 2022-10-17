import { FETCH_CLIENTS, FETCH_CLIENTS_SUCCESS } from "redux/constants/Clients";

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
        default:
            return state;
    }
}

export default clients