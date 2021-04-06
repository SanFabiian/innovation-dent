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
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>


<div class="content">
	<button
		type="button"
		class="btn-go-back"
		on:click={goBack}>&#8249;&#8249;
	</button>
	<h1>{post.title}</h1>
	{@html post.html}
</div>
