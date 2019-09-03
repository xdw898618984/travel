import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: {
        dobuleCity(state) {
            return state.city + '-' + state.city
        }
    }
    // actions: {
    //     changeCity(ctx, city) {
    //         console.log(city);
    //         //actions调用commit 传给Mutations
    //         ctx.commit('changeCitys', city)

    //     }
    // },

})