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
