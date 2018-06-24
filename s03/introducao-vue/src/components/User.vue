<template>
	<div id="user">
		<h3>O usuário</h3>
		<p>Meu nome é {{ username }}</p>
		<app-info></app-info>
	</div>
</template>

<script>
	import Info from './Info.vue'

	export default {
		data() {
			return {
				username: 'Angelo'
			}
		},
		components: {
			'app-info': Info
		}
	}
</script>

<style scoped>
	p {
		font-style: italic;
		color: red;
	}
</style>