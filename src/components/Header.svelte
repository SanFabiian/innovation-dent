<script>
    export let segment;
	import Nav from '@components/Nav.svelte';
	import Sitebar from '@components/Sitebar.svelte';
	import logo from '@static/logo-blanco.svg'
    let open = false
</script>
<style>
    header {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        background: transparent;
    }
	.logo {
		width: 100px;
	}
</style>
<header>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href="."><img src="{logo}" alt="Logo innovation dent" class="logo"></a>
    <Sitebar bind:open/>
    <Nav {segment} bind:navOpen={open}/>
</header>