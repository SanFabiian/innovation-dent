<script>
	import Burger from './Burger.svelte'
	export let navOpen = false
</script>

<Burger bind:open={navOpen}/>