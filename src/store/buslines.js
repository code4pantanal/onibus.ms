import { writable } from 'svelte/store'
const createBusLineStore = () => {

    let { subscribe, set } = writable([])
    
    const actions = {
        setLines: (lines) => {
            set(lines)
        }
    }
    return {
        ...actions, subscribe
    }
}

export default createBusLineStore()