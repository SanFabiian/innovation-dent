<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import CardBlog from '@components/CardBlog.svelte'
	export let posts;
	let pageNum = 1
	let pageSize = 6
	let pageCount = Math.ceil(posts.length / pageSize)
	let pagination
	function paginate(array, pageSize, pageNum) {
		return array.slice((pageNum - 1) * pageSize, pageNum * pageSize)
	}
	const nextPage = () => {
		pageNum++
		showPagination()
	}
	const prevPage = () => {
		pageNum--
		showPagination()
	}
	function showPagination() {
		return pagination = paginate(posts, pageSize, pageNum)
	}
	showPagination()
	
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1 class="title">Blog</h1>

{#each pagination as page}
	<CardBlog
		image={page.image}
		tag={page.tag}
		date={page.createdAt}
		title={page.title}
		slug={page.slug}
	/>
{/each}
{#if pageNum > 1}
	<button on:click={prevPage}>Prev</button>
{/if}
{#if pageNum < pageCount}
	<button on:click={nextPage}>Next</button>
{/if}

<style>
	h1 {
		color: var(--yellow);
		font-family: var(--font-yellowtail);
	}
</style>