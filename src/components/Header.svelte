<script>
    import Nav from '@components/Nav.svelte';
	import Sitebar from '@components/Sitebar.svelte';
	import logo from '@static/logo-blanco.svg'
    export let segment;
    let open = false

</script>

<header>
	<div class="header-wrap">
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
    </div>
</header>
<style>
    header {
        background: var(--green);
        position: fixed;
        top: 0;
        width: 100%;
        height: 65px;
        z-index: 1;
    }
    .header-wrap {
        display: flex;
        align-items: center;
    }
	.logo {
		width: auto;
        height: 65px;
        padding: 5px 20px;
	}
    img {
        height: 100%;
    }
    a {
        padding: 5px;
    }
    @media (min-width: 1024px) {
        .header-wrap {
            max-width: 1100px;
            margin: 0 auto;
        }
    }
</style>