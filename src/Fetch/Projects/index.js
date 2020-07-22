import axios from '../axios'

export const getProjects = async () => {
    try {
        const res = await axios.get("/v1/projects");
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}
export const projectLike = async (data) => {
    try {
        const res = await axios.post(`/v1/projects/${data.projectId}/voting`, {
            type: data.actionType
        });
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}