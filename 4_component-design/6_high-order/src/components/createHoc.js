export default function(component, url) {
  return {
    name: 'hoc',
    data() {
      return {
        items: [],
      };
    },
    created() {
      fetch(url)
        .then(res => res.json())
        .then(data => (this.items = data))
        .catch(error => console.log(error));
    },
    render(h) {
      return h(component, {
        props: {
          items: this.items,
        },
      });
    },
  };
}
