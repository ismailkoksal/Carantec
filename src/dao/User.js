const axios = require('axios')

export default class UserDao {
    static login(username, password) {
        return axios.post('/user', {
            username: username,
            password: password
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    static create(data) {
        return axios.post()
    }
}