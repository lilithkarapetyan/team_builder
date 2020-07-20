import axios from '../axios'

export const getTopics = async () => {
    try {
        const res = await axios.get("/v1/topics");
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}
