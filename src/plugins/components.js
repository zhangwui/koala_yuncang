// mint-ui UI
import {Button, Tabbar, TabItem, Header, Cell, Swipe, SwipeItem,Search} from 'mint-ui'

// 字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faShoppingCart, faUser, faChevronLeft, faEquals,faIdBadge} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 添加具体的字体图标
library.add(faHome, faShoppingCart, faUser, faChevronLeft, faEquals,faIdBadge)
export default (Vue) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component(Button.name, Button)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Header.name, Header)
  Vue.component(Cell.name, Cell)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Search.name, Search)

}