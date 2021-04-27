<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import CardBlog from '@components/CardBlog.svelte'
	import firstPost from '@post/_posts.js'
	import formatIsoTime from '@utils/formatIsoTime.js'
	import readingTime from '@utils/readingTime'
	const tags = firstPost[0].tag.map(t => `<div class="tag ${t.slug}">${t.name}</div>`).join('')
	export let posts;
	let pageNum = 1
	const pageSize = 6
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
	<title>Blog Innovation Dent</title>
	<meta name="description" content="Acá encontraras toda nuestra experiencia sobre todo lo relacionado con el cuidado de tu boca.">
	<meta name="robots" content="index, follow">

	<meta name="og:title" content="Blog Innovation Dent" />
	<meta name="og:description" content="Acá encontraras toda nuestra experiencia sobre todo lo relacionado con el cuidado de tu boca." />
	<meta name="og:image" content="https://assets-innovation-dent.s3-us-west-1.amazonaws.com/Cover.jpg" />
	<meta name="og:url" content="https://innovationdent.com/blog" />
	<meta name="og:site_name" content="Innovation Dent Oficial" />
	<meta name="og:locale" content="es_ES" />
	<meta name="og:type" content="article" />
	<meta name="fb:app_id" content="InnovationDentOficial" />
</svelte:head>

<section class="content">
	<h1>Blog</h1>

	<div class="first-post">
		<figure>
			<img src="{firstPost[0].image}" alt="{firstPost[0].slug}">
		</figure>
		<div class="first-post-desc">
			<div>
				{@html tags}
			</div>
			<p class="time"><time datatime={firstPost[0].createdAt}>📆 {formatIsoTime(firstPost[0].createdAt)}</time>  - <b>{readingTime(firstPost[0].html)}</b></p>
			<h2 class="subtitle">{firstPost[0].title}</h2>
			<p>{firstPost[0].desc}</p>
			<a href="/blog/{firstPost[0].slug}" class="btn btn-primary">Leé más</a>
		</div>
	</div>

	<div class="cards-blog-wrap">
		{#each pagination as page, i}
			{#if i > 0}
			<CardBlog
					image={page.image}
					tag={page.tag}
					date={page.createdAt}
					title={page.title}
					slug={page.slug}
					html={page.html}
				/>
			{/if}
		{/each}
	</div>
	{#if pageCount > 1}
		<div class="pagination">
			<button
				class="btn btn-primary"
				type="button"
				on:click={prevPage}
				disabled={pageNum === 1 ? true : false}
			>Volver
			</button>
			<button
				class="btn btn-primary"
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
	.first-post {
		display: grid;
		grid-template-columns: 1fr;
	}
	.first-post img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.first-post-desc {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px;
		height: 100%;
		background: var(--grey-bg);
	}
	.first-post-desc h2 {
		margin: 10px 0 0 0;
	}
	.first-post-desc p {
		padding: 0;
	}
	.cards-blog-wrap {
		padding: 30px;
	}
	.time {
		font-size: 1.4rem;
		margin: 5px 0;
	}
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
	time {
		font-family: var(--font-maven);
		font-size: 1.4rem;
	}
	@media (min-width: 600px) {
		.cards-blog-wrap {
			display: grid;
			grid-template-columns: repeat(2,1fr);
			gap: 15px;
		}
	}
	@media (min-width: 768px) {
		.first-post {
			grid-template-columns: 2fr 1fr;
		}
		.cards-blog-wrap {
			padding: 20px 0;
		}
	}
	@media (min-width: 1200px) {
		.cards-blog-wrap {
			grid-template-columns: repeat(4,1fr);
		}
	}
</style>