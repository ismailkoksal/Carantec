import axios from 'axios'
import config from '../../config/config'

export default class UserDao {
    static login(username, password) {
        return axios.post(`${config.baseURL}/user/login`, {
            username: username,
            password: password
        })
    }

    static signup(data) {
        return axios.post(`${config.baseURL}/user`, data)
    }

    static setAvis(userId, manifId, avis, note) {
        return axios.post(`${config.baseURL}/user/avis`, {
            userId: userId,
            manifId: manifId,
            avis: avis,
            note: note
        })
    }

    static reserver(userId, manifId, nbPers) {
        return axios.post(`${config.baseURL}/user/manifestation`, {
            userId: userId,
            manifId: manifId,
            nbPers: nbPers
        })
    }
}