<script>
    import CardBlog from '@components/CardBlog.svelte'
    import posts from '@post/_posts.js'
</script>
<section class="carousel-wrap">
    <div class="carousel-header">
        <h1 class="title">Blog</h1>
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
        flex-direction: column;
        flex-wrap: wrap;
        gap: var(--gap);
        padding: 30px 20px;
    }
    .carousel-header {
        padding: 20px;
    }
    @media (min-width: 600px) {
        .carousel-items-wrap {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 15px;
        }
        .btn-primary {
            grid-column: 2/3;
            justify-self: flex-end;
            margin-top: 0;
            margin-right: 20px;
        }
    }
    @media (min-width: 768px) {
        .carousel-header {
            margin: 0 auto;
            padding: 0 20;
        }
        .carousel-items-wrap {
            max-width: 768px;
            margin: 0 auto;
        }
    }
    @media (min-width: 1200px) {
        .carousel-items-wrap {
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 15px;
            max-width: 1100px;
        }
        .btn-primary {
            grid-column: 4/5;
            justify-self: flex-end;
            margin-right: 20px;
        }
    }
</style>