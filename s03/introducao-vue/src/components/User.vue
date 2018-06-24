<template>
	<div id="user">
		<h3>O usuário</h3>
		<p>Meu nome é {{ username }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: 'Angelo'
			}
		}
	}
</script>

<style>
	p {
		font-style: italic
	}
</style>