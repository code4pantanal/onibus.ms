import { writable } from 'svelte/store'
const createSettingsStore = () => {

    const defaultSettings = {
        theme: 'light'
    }
    let { subscribe, update,set } = writable(defaultSettings)



    const actions = {
        changeTheme: () => {
            update(settings => {
                settings.theme = settings.theme === 'light' ? 'dark' : 'light';
                return settings
            })

        }
    }
    return {
        ...actions, subscribe, useLocalStorage: () => {
            const json = localStorage.getItem('msbus.settings');
            if (json) {
                set(JSON.parse(json));
            }
            subscribe(current => {
                localStorage.setItem('msbus.settings', JSON.stringify(current));
            });
        }
    }
}

export default createSettingsStore()