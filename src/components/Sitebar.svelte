<script>
	import logo from '@static/logo-blanco.svg'
    export let segment;
	export let open = false
</script>

<nav class:open>
	<div class="nav-header">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href="/"class="logo"><img src="{logo}" alt="Logo innovation dent"></a>
	</div>
	<ul>
		<li><a aria-current="{segment === 'services' ? 'page' : undefined}" href="services">Nuestros Servicios</a></li>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
		<li><a rel=prefetch aria-current="{segment === 'experiences' ? 'page' : undefined}" href="experiences">Experiencias</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Nosotros</a></li>
		<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contácto</a></li>
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
	}
	nav {
		position: absolute;
		width: 100%;
		height: 100vh;
		background: var(--green);
		left: -100%;
		transition: left 0.3s ease-in-out;
	}
	img {
		height: 50px;
	}
	.open {
		left: 0
	}
</style>