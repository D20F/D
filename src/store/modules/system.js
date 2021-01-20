

const system = {
    state: () => ({
        notifyData: [],
        catalogueData: []

    }),
    mutations: {
        ADD_NOTIFY: (state, data) => {
            state.notifyData.push(data);
            setTimeout(() => {
                state.notifyData.shift();
            }, data.time);
        },
        TOG_CATALOGUE: (state, data) => {
            state.catalogueData = data;
     
        },
    },
    actions: {
        add_notify({ commit }, data) {
            commit('ADD_NOTIFY', data)
        },
        tog_catalogue({ commit }, data) {
            commit('TOG_CATALOGUE', data)
        },
    },
    modules: {

    },
    namespaced: true,
}
export default system

// 内容 类型 时间