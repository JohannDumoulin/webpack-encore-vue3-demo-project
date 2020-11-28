import { ref, computed } from 'vue'
import Api from '../api'

const state = ref({
    demo: [],
})

export default () => {
    /**
     *
     * @returns {UnwrapRef<[]>}
     */
    const getAll = () => state.value.demo

    /**
     *
     * @param id
     * @returns {UnwrapRefSimple<*>}
     */
    const get = (id) => {
        return state.value.demo.find(({ id: pId }) => `${ pId }` === `${ id }`)
    }

    /**
     *
     * @returns {Promise<*>}
     */
    const fetchAll = () => {
        return Api.Demo.getAll().then(demo => {
            state.value.demo = demo
        })
    }

    return {
        getAll,
        get,
        fetchAll,
    }
}
