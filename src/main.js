import Vue from 'vue';
import SvComponents from '@superviz/sv-components';
import TreeView from 'vue-json-tree-view';

import './global.scss';
import '@superviz/sv-components/dist/sv-components.css';
import '@superviz/sv-icons/css/style.css';

import App from './App.vue';

Vue.use(SvComponents);
Vue.use(TreeView);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
