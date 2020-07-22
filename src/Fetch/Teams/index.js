import axios from '../axios'

export const getTeams = async () => {
    try {
        const res = await axios.get("/v1/teams");
        // const res = await axios.post("/v1/topics/5f15b78d40ddf10004ee3065/voting", {type: "like"});
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}
