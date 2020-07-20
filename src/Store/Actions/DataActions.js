import { getTopics as getTopicsData} from "../../Fetch/Topics";
import { getProjects as getProjectsData} from "../../Fetch/Projects";
import { getTeams as getTeamsData} from "../../Fetch/Teams";


export const getTopics = () => {
    return (dispatch) => {
        getTopicsData().then(data => {
            dispatch(setTopics(data))
        })
    }
};

const setTopics = (topics) => ({
    type: 'setTopics',
    payload: { topics }
})

export const getProjects = () => {
    return (dispatch) => {
        getProjectsData().then(data => {
            dispatch(setProjects(data))
        })
    }
};

const setProjects = (projects) => ({
    type: 'setProjects',
    payload: { projects }
})

export const getTeams = () => {
    return (dispatch) => {
        getTeamsData().then(data => {
            dispatch(setTeams(data))
        })
    }
};

const setTeams = (teams) => ({
    type: 'setTeams',
    payload: { teams }
})