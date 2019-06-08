import axios from 'axios';
import mainConfig from "../configs/main";

export default {
    getAllTeamLeads: () => axios.get(`${mainConfig.apiHost  }/employees/team-leads`).then(res => res.data),
    getAllHrs: () => axios.get(`${mainConfig.apiHost  }/employees/hr`).then(res => res.data),
}
