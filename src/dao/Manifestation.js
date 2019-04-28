import axios from 'axios'
import config from '../../config/config'

export default class ManifestationDao {
    static getAll() {
        return axios.get(`${config.baseURL}/manifestations`)
    }

    static getInscrit(userId) {
        return axios.get(`${config.baseURL}/manifestations?id=${userId}`)
    }
}