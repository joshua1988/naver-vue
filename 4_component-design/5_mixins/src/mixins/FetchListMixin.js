export default {
  data: function() {
    return {
      items: [],
    };
  },
  methods: {
    fetchData(url) {
      var vm = this;
      fetch(url)
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          vm.items = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created: function() {
    var url = 'https://jsonplaceholder.typicode.com/' + this.$route.name;
    this.fetchData(url);
  },
};
