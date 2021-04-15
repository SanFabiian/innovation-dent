<script>
    import Nav from '@components/Nav.svelte';
	import Sitebar from '@components/Sitebar.svelte';
	import logo from '@static/logo-blanco.svg'
    export let segment;
    let open = false

</script>

<header>
	<a
        aria-current="{segment === undefined ? 'page' : undefined}"
        href="/"
        class="logo"
        on:click={() => open = false}
    >
        <img src="{logo}" alt="Logo innovation dent">
    </a>
    <Sitebar bind:open/>
    <Nav {segment} bind:navOpen={open}/>
</header>
<style>
    header {
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 65px;
        padding: var(--gap);
        background: var(--green);
        z-index: 1;
    }
	.logo {
		width: 100px;
	}
    a {
        padding: 5px;
    }
</style>