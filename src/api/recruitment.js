import axios from 'axios';
import mainConfig from "../configs/main";

export default {
    getAllRecruitments: () => axios.get(`${mainConfig.apiHost}/recruitments`).then(res => res.data),

    getUserRecruitments: () => axios.get(`${mainConfig.apiHost}/recruitments/user`).then(res => res.data),

    addCv: (idAndCv) => axios.put(`${mainConfig.apiHost}/recruitments/cv`, idAndCv).then(res => res.data),

    acceptRecruitment: (recruitmentId) => axios.put(`${mainConfig.apiHost}/recruitments/accept`, null, {params: {recruitmentId}}).then(res => res.data),

    refuseRecruitment: (recruitmentId) => axios.put(`${mainConfig.apiHost}/recruitments/refuse`, null, {params: {recruitmentId}}).then(res => res.data)
}
