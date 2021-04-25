<script>
    import CardBlog from '@components/CardBlog.svelte'
    import posts from '@post/_posts.js'
</script>
<section class="carousel-wrap">
    <div class="carousel-header">
        <h1 class="title">Blog</h1>
        <div class="carousel-title">
            <p>Acá encontraras todo lo relacionado con el cuidado de tus dientes.</p>
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
        <a href="/blog" class="btn btn-primary">Ver Más</a>
    </div>
</section>
<style>
    .carousel-items-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: var(--gap);
        padding: 30px 20px;
        background: var(--grey-bg);
    }
    .carousel-header {
        padding: 20px;
    }
    p {
        font-size: var(--size-text);
    }
    h1 {
        margin-bottom: 30px;
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