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
	const pageSize = 5
	const pageCount = Math.ceil(posts.length / pageSize)
	let pagination;
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
	showPagination(pageNum)
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="content">
	<h1>Blog</h1>
	<p>Acá encontraras toda nuestra experiencia sobre todo lo relacionado con el cuidado de tu boca.</p>
	{#each pagination as page}
		<CardBlog
			image={page.image}
			tag={page.tag}
			date={page.createdAt}
			title={page.title}
			slug={page.slug}
		/>
	{/each}
	{#if pageCount > 1}
	<div class="pagination">
		<button
			class="btn-primary"
			type="button"
			on:click={prevPage}
			disabled={pageNum === 1 ? true : false}
		>Volver
		</button>
		<button
			class="btn-primary"
			type="button"
			on:click={nextPage}
			disabled={pageNum === pageCount ? true : false}
			>Siguiente
		</button>
	</div>
	<h6>Página {pageNum} de {pageCount}</h6>
	{/if}
</section>
<style>
	.pagination {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
	}
	button[disabled] {
		background: transparent;
		color: var(--yellow);
	}
	h6 {
		width: 100%;
		padding: 5px;
		text-align: center;
		font-size: var(--size-mintext);
		color: var(--grey);
	}
</style>