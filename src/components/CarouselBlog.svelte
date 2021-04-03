<script>
    import CardBlog from '@components/CardBlog.svelte'
    import posts from '@post/_posts.js'
</script>
<section>
    <div class="carousel-header">
        <h1 class="title">Blog</h1>
        <div class="carousel-title">
            <p>Acá encontraras todo lo relacionado con el cuidado de tus dientes.</p>
            <a href="/blog" class="btn-primary">Ver Más</a>
        </div>
    </div>
    <div class="carousel-items-wrap">
        {#each posts as post, i}
            {i++}
            <CardBlog
                image={post.image}
                tag={post.tag}
                date={post.createdAt}
                title={post.title}
                slug={post.slug}
            />
            {#if i ===3 }
                break
            {/if}
        {/each}
    </div>
</section>
<style>
    section {
        background: var(--grey-bg);
    }
    .carousel-items-wrap {
        display: flex;
        gap: var(--gap);
        padding: 15px;
        padding-bottom: 60px;
        overflow-x: scroll;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        scroll-snap-type: x proximity;
    }
    .carousel-header {
        padding: 20px 10px;
    }
    p {
        font-size: var(--size-text);
    }
</style>