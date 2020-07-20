const dataReducer = (state={}, action) => {
    switch (action.type) {
        case 'setTopics':
            console.log(action)
            state = setTopics(state, action)
            break;
        case 'setProjects':
            console.log(action)
            state = setProjects(state, action)
            break;
        case 'setTeams':
            console.log(action)
            state = setTeams(state, action)
            break;
        default:
            break;
    }
    return state;
}

const setTopics = (state, action) => ({
    ...state, 
    topics: action.payload.topics
});

const setProjects = (state, action) => ({
    ...state, 
    projects: action.payload.projects
});

const setTeams = (state, action) => ({
    ...state, 
    teams: action.payload.teams
});
export default dataReducer;