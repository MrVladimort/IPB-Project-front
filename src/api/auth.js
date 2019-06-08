import axios from 'axios';
import mainConfig from "../configs/main";

export default {
    loginEmail: credentials => axios.post(`${mainConfig.apiHost  }/auth/login`, credentials).then(res => res.data),
    authWithToken: () => axios.get(`${mainConfig.apiHost  }/auth/user`).then(res => res.data),
}
