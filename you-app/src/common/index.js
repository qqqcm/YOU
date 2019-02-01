import scroller from './components/scroller/scroller'
import {FetchGet,FetchPost} from './fetch'

export default {
    install(Vue){
        Vue.component(scroller.name,scroller);


        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}