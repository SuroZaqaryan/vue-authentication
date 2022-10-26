const baseURL = 'https://gabbyblog.herokuapp.com';

const state = {
    user: null
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    StateUser: (state) => state.user,
};

const actions = {
    async Register({ dispatch }, form) {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
            mode: 'no-cors',
            redirect: 'follow'
        };

        const res = await fetch(`${baseURL}/register`, settings);
        const data = await res.text();

        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)

        await dispatch('LogIn', UserForm)

        return data;
    },

    async LogIn({ commit }, user) {
        const settings = {
            method: 'POST',
            body: user,
            mode: 'no-cors',
            redirect: 'follow'
        };

        const res = await fetch(`${baseURL}/login`, settings);
        const data = await res.text();
        await commit("setUser", user.get("username"));

        return data;
    },
};

const mutations = {
    setUser(state, username) {
        state.user = username;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};