const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'userLoggedIn':
            state = userLoggedIn(state, action)
            break;
        case 'setUser':
            state = setUser(state, action)
            break;
        default:
            break;
    }
    return state;
}

const userLoggedIn = (state, action) => {
    const { user } = action.payload;
    if (user.token) {
        window.sessionStorage.setItem("token", user.token);
        state = {
            ...state,
            token: user.token,
            user
        }
    }
    return state;
}

const setUser = (state, action) => {
    return { ...state, user: action.payload.user }
}

export default authReducer;