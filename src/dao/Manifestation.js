import axios from 'axios'
import config from '../../config/config'

export default class ManifestationDao {
    static getAll() {
        return axios.get(`${config.baseURL}/manifestations`)
    }

    static getReservation(userId) {
        return axios.get(`${config.baseURL}/manifestations/user/${userId}`)
    }

    static getManifestationById(manifId) {
        return axios.get(`${config.baseURL}/manifestation/${manifId}`)
    }

    static getAvis(manifId) {
        return axios.get(`${config.baseURL}/manifestation/${manifId}/avis`)
    }
}