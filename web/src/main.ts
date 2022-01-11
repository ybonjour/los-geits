import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { library} from '@fortawesome/fontawesome-svg-core'
import { faSubway } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { faWalking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSubway)
library.add(faCar)
library.add(faBicycle)
library.add(faWalking)

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.mount('#app')
