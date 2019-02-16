import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showmine:true,
    goodsData:[],
  },
  mutations: {
    yesShowMine(state){
      state.showmine = true;
    },
    noShowMine(state){
      state.showmine = false;
    },
    addGoodsData(state,data){
      state.goodsData = data;
    }
  },
  actions: {

  }
})
