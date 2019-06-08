import axios from 'axios';
import mainConfig from "../configs/main";

export default {
    getAllJobsOffers: () => axios.get(`${mainConfig.apiHost}/jobs`).then(res => res.data),
    getTests: () => axios.get(`${mainConfig.apiHost}/tests`).then(res => res.data),
    applyForJobOffer: (jobOfferId, testsData) => axios.post(`${mainConfig.apiHost}/recruitments`, testsData, {params: {jobOfferId}}).then(res => res.data),
}
