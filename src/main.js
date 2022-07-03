import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import VueApollo from 'vue-apollo'

import './styles/main.scss'
import { routes } from "./routes"

const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPH_CMS_URI,
  headers: {
    authorization: `Bearer ${process.env.VUE_APP_GRAPH_CMS_TOKEN}`
  },
  cache: new InMemoryCache()
})

Vue.use(VueRouter)
Vue.use(VueApollo)
Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const router = new VueRouter({ routes, base: process.env.ROUTER_BASE });

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
