import scroller from './components/scroller/scroller'
import { FetchGet, FetchPost } from './fetch'
import { Swipe, SwipeItem, Icon, NavBar } from 'vant';
export default {
    install(Vue) {
        Vue.component(scroller.name, scroller);
        Vue.use(Icon);
        Vue.use(Swipe);
        Vue.use(SwipeItem);
        Vue.use(NavBar);
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}