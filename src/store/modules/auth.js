import axios from "axios";

const actions = {
    async Register({ dispatch }, form) {
        await axios.post('register', form)

        let UserForm = new FormData();
        UserForm.append("username", form.username);
        UserForm.append("password", form.password);

        await dispatch("LogIn", UserForm);
    },

    async LogIn({ commit }, user) {
        await axios.post("login", user);
        await commit("setUser", user.get("username"));
    },

    async LogOut({ commit }) {
        commit("logout");
    },
};

const mutations = {
    setUser(state, username) {
        localStorage.setItem('username', username);
        console.log(state);
    },

    logout() {
        localStorage.removeItem("username");
    },
};

export default {
    actions,
    mutations,
};
