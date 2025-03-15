// import { LOGIN_SUCCESS, LOGIN_FAIL, AuthActionTypes } from '../actions/authActions';

// interface AuthState {
//     isAuthenticated: boolean;
//     error: string | null;
// }

// const initialState: AuthState = {
//     isAuthenticated: false,
//     error: null,
// };

// const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
//     switch (action.type) {
//         case LOGIN_SUCCESS:
//             return { ...state, isAuthenticated: true, error: null };
//         case LOGIN_FAIL:
//             return { ...state, isAuthenticated: false, error: action.payload };
//         default:
//             return state;
//     }
// };

// export default authReducer;

// ... (другие импорты) ...
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/authActions';

interface AuthState {
    isAuthenticated: boolean;
    user: any | null;
    error: string | null;
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
    accessToken: null,
    refreshToken: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                error: null,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            };
        case LOGIN_FAIL:
            return { ...state, isAuthenticated: false, error: action.payload, accessToken: null, refreshToken: null };
        default:
            return state;
    }
};

export default authReducer;

