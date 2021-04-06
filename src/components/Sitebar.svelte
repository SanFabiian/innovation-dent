<script>
	import linksNav from '@utils/linksNav.js'
    export let segment;
	export let open = false
	function btnOpen() {
		open = !open
	}

</script>

<nav class:open>
	<ul>
		{#each linksNav as route}
			<li>
				<a
					aria-current="{segment === route.name ? 'page' : undefined}" href={route.route}
					on:click={btnOpen}
				>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
<style>
	ul {
		text-align: right;
	}
	li {
		list-style: none;
	}
	a {
		display: block;
		width: 100%;
		padding: 10px 20px;
		color: var(--white);
		text-decoration: none;
		font-family: var(--font-maven);
		font-size: var(--size-text);
		text-transform: capitalize;
	}
	nav {
		position: absolute;
		top: 65px;
		width: 100%;
		height: 100vh;
		background: var(--green);
		right: -100%;
		transition: right 0.3s ease-in-out;
		z-index: 1;
	}
	.open {
		right: 0;
	}
</style>