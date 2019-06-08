import axios from 'axios';
import mainConfig from "../configs/main";

export default {
    getTime: () => axios.get(`${mainConfig.apiHost}/interviews/time`).then(res => res.data),
    createInterview: (recruitmentId, dateAndTime) => axios.post(`${mainConfig.apiHost}/interviews`, dateAndTime, {params: {recruitmentId}}).then(res => res.data),
    getUserInterviews: () => axios.get(`${mainConfig.apiHost}/interviews/user`).then(res => res.data),
    getAllInterviews: () => axios.get(`${mainConfig.apiHost}/interviews`).then(res => res.data),
    acceptInterview: (interviewId, teamLeadId) => axios.put(`${mainConfig.apiHost}/interviews/accept`, null, {
        params: {
            interviewId,
            teamLeadId
        }
    }).then(res => res.data),

    refuseInterview: (interviewId) => axios.put(`${mainConfig.apiHost}/interviews/refuse`, null, {params: {interviewId}}).then(res => res.data),
}
