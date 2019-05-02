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

    static setAvis(avis, note, userId, manifId) {
        return axios.post(`${config.baseURL}/user/avis`, {
            avis: avis,
            note: note,
            userId: userId,
            manifId: manifId,
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