import scroller from './components/scroller/scroller'
import scrollx from './components/scrollx/scrollx'
import { FetchGet, FetchPost } from './fetch'
import { Swipe, SwipeItem, Icon, NavBar, Rate } from 'vant';
export default {
    install(Vue) {
        Vue.component(scroller.name, scroller);
        Vue.component(scrollx.name, scrollx);
        Vue.use(Icon);
        Vue.use(Rate);
        Vue.use(Swipe);
        Vue.use(SwipeItem);
        Vue.use(NavBar);
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}