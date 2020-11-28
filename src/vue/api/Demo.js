import axios from 'axios'

export default class {
    baseUrl

    constructor (baseUrl) {
        this.baseUrl = baseUrl
    }

    /**
     *
     * @returns {Promise<any>}
     */
    async getAll() {
        const res = await axios.get(`${this.baseUrl}/demo`)

        return res.data
    }
}
