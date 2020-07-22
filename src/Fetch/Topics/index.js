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
export const topicLike = async (data) => {
    try {
        const res = await axios.post(`/v1/topics/${data.topicId}/voting`, {
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
export const topicAdd = async (data) => {
    try {
        const res = await axios.post('/v1/topics', {
            title: data.title
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
export const topicDelete = async (data) => {
    try {
        const res = await axios.delete(`/v1/topics/${data.topic.id}`);
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}
