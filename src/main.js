import Vue from 'vue';
import App from './App';
import router from './router/index';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next);
//   if(to.meta.requiresAuth) {
//     // console.log('這裡需要驗證');
//     // const api = process.env.APIPATH + '/api/user/check';
//     // const vm = this;
//     // axios.post(api, vm.user).then(function(res){
//     //   console.log(res.data);
//     //   if(res.data.success) {
//     //     // vm.$router.push('/');
//     //     next();
//     //   }else{
//     next({
//       path: '/login'
//     });
//     //   }
//     // })
//   }else{
//     next();
//   }
// })