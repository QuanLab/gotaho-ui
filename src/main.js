import Vue from 'vue'
import App from './App.vue'

import './assets/scss/style.scss'
import './assets/scss/materialdesignicons.min.scss'


Vue.config.productionTip = false

const hostName = 'http://192.168.217.136:8080/api/v1/'

export const apiConfig = {
    API_GET_JOB: hostName + 'jobs?limit={{limit}}&offset={{offset}}',
    API_START_JOB: hostName + 'startJob',
    API_STOP_JOB: hostName + 'stopJob',
    API_SEARCH_JOB: hostName + 'search/jobs?q={{q}}&limit={{limit}}'
}

new Vue({
    render: h => h(App),
}).$mount('#app')