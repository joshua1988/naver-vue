<script>
import axios from 'axios';

export default {
	props: ['url'],
	data() {
		return {
			response: null,
			loading: false,
		};
	},
	methods: {
		fetchContacts: function() {
			this.loading = true;
			var vm = this;
			axios
				.get(this.url)
				.then(function(response) {
					vm.response = response.data;
				})
				.catch(function(error) {
					console.log(error);
				})
				.finally(function() {
					vm.loading = false;
				});
		},
	},
	created: function() {
		this.fetchContacts();
	},
	render: function() {
		return this.$scopedSlots.default({
			response: this.response,
			loading: this.loading,
		});
	},
};
</script>