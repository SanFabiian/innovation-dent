<script>
    import CardBlog from '@components/CardBlog.svelte'
    import posts from '@post/_posts.js'
</script>
<section class="carousel-wrap">
    <div class="carousel-header">
        <h1 class="title">Blog</h1>
        <div class="carousel-title">
            <p>Acá encontraras todo lo relacionado con el cuidado de tus dientes.</p>
            <a href="/blog" class="btn btn-primary">Ver Más</a>
        </div>
    </div>
    <div class="carousel-items-wrap">
        {#each posts as post, i}
            {#if i < 4 }
                <CardBlog
                image={post.image}
                tag={post.tag}
                date={post.createdAt}
                title={post.title}
                slug={post.slug}
                />
            {/if}
        {/each}
    </div>
</section>
<style>
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
    @media (min-width: 768px) {
        .carousel-header {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 100px;
        }
    }
    @media (min-width: 1024px) {
        .carousel-header {
            max-width: 1200px;
        }

        .carousel-items-wrap {
            overflow: initial;
            flex-wrap: wrap;
        }
    }
    @media (min-width: 1441px) {
        .carousel-items-wrap {
            padding: 0 100px;
        }
    }
</style>