<script>
	import logo from '@static/logo-blanco.svg'
	import linksNav from '@utils/linksNav.js'
    export let segment;
	export let open = false
	function btnOpen() {
		open = !open
	}

</script>

<nav class:open>
	<div class="nav-header">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href="/"class="logo"on:click={btnOpen}><img src="{logo}" alt="Logo innovation dent"></a>
	</div>
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
    .nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 15px;
	}
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
		width: 100%;
		height: 100vh;
		background: var(--green);
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 1;
	}
	img {
		height: 50px;
	}
	.open {
		left: 0
	}
</style>