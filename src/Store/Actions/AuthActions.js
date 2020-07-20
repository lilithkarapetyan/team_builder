import { getUser as getUserData } from "../../Fetch/Users";

export const userLoggedIn = (user) => ({
    type: 'userLoggedIn',
    payload: { user }
});

export const getUser = () => {
    console.log("getuser")
    return (dispatch) => {
        console.log("getuser")
        getUserData().then(data => {
            dispatch(setUser(data))
        })
    }
};

const setUser = (user) => ({
    type: 'setUser',
    payload: { user }
})