<script>
	import Main from '@components/Main.svelte'
	import Header from '@components/Header.svelte'
	import Footer from '@components/Footer.svelte'
	import Meeting from '@components/Meeting.svelte'
</script>

<Header />
<Main>
	<slot />
</Main>
<Footer />
<Meeting />