import scroller from './components/scroller/scroller'
import { FetchGet, FetchPost } from './fetch'
import { Icon } from 'vant';
export default {
    install(Vue) {
        Vue.component(scroller.name, scroller);
        Vue.use(Icon);

        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}