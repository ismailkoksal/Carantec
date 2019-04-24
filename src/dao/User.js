const axios = require('axios');
import config from '../../config/config'

export default class UserDao {
    static login(username, password) {
        return axios.post(`${config.baseURL}/user/login`, {
            username: username,
            password: password
        })
    }
}