// export default function ({$axios, app , store}) {

//   $axios.interceptors.request.use((config) => {

//     return config;
//   });

//   $axios.interceptors.response.use(response => {

//     return Promise.resolve(response);
//   }, (error) => {
//     const code = parseInt(error.response && error.response.status);

//     if (code === 401 && store.state.auth.loggedIn) {
//       store.dispatch('auth/logout');
//        // app.$auth.logout();
//       app.router.replace({
//         path: '/'
//       });
//     }
  
//     app.$notify.error({
//       title: 'Error',
//       message: error.response.data.message
//     });
//     return Promise.reject(error.response);
//   });
// }
