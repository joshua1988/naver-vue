export default {
  install(Vue) {
    Vue.prototype.$_logText = function() {
      console.log('hello');
    };
  },
};
