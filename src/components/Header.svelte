<script>
    export let segment;
	import Nav from '@components/Nav.svelte';
	import Sitebar from '@components/Sitebar.svelte';
	import logo from '@static/logo-blanco.svg'
    let open = false
</script>

<header>
	<a href="/">
        <img src="{logo}" alt="Logo innovation dent" class="logo">
    </a>
    <Sitebar bind:open/>
    <Nav {segment} bind:navOpen={open}/>
</header>
<style>
    header {
        display: flex;
        background: var(--green);
    }
	.logo {
		width: 100px;
	}
    a {
        padding: 5px;
    }
</style>