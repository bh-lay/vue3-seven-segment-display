import { createApp } from 'vue'
import Docs from './index.vue'
import highlightjsCustom from './highlightjs-custom'

const app = createApp(Docs)
app.use(highlightjsCustom)
app.mount('#app')
