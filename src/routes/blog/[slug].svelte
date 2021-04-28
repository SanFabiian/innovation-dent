<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
	function goBack() {
		history.go(-1)
	}
</script>

<script>
	import leftArrow from '@static/arrow-left.svg'
	import readingTime from '@utils/readingTime'
	export let post;
	const desc = `Acá encontraras toda nuestra experiencia con relacionado ${post.title}.`
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={desc}>
	<meta name="robots" content="index, follow">

	<meta name="og:title" content="Blog Innovation Dent" />
	<meta name="og:description" content={desc} />
	<meta name="og:image" content="https://assets-innovation-dent.s3-us-west-1.amazonaws.com/Cover.jpg" />
	<meta name="og:url" content="https://innovationdent.com/blog" />
	<meta name="og:site_name" content="Innovation Dent Oficial" />
	<meta name="og:locale" content="es_ES" />
	<meta name="og:type" content="article" />
	<meta name="fb:app_id" content="InnovationDentOficial" />
</svelte:head>


<section class="content blog-wrap">
	<button
		type="button"
		class="btn-go-back"
		on:click={goBack}>
		<img src="{leftArrow}" alt="icono flecha a la izquierda">
	</button>
	<h1>{post.title}</h1>
</section>
<p class="reading-time">Léelo en {readingTime(post.html)}</p>
<section class="content get-content">
	{@html post.html}
</section>

<style>
	.reading-time {
		width: 100%;
		max-width: 680px;
		margin: 0 auto;
		color: var(--green);
		font-size: 1.6rem;
		padding: 0 20px;
	}
	.btn-go-back {
		position: absolute;
		top: 50px;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		border-radius: 15px;
		border: none;
		background: #61b9be85;
		color: var(--white);
		font-size: 30px;
	}
	.btn-go-back img {
		height: 70%;
	}
</style>