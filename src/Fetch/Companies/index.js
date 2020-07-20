import axios from '../axios'

export const getCompanies = async () => {
    try {
        const res = await axios.get("/v1/companies");
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}
