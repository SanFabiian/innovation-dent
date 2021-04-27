<script>
    import formatIsoTime from '@utils/formatIsoTime.js'
    import readingTime from '@utils/readingTime'
    export let image
    export let tag
    export let date
    export let title
    export let slug
    export let html
    const tags = tag.map(t => `<div class="tag ${t.slug}">${t.name}</div>`).join('')
</script>
<article class="carousel-item">
    <figure>
        <img src="{image}" alt="{title}">
    </figure>
    <a class="carousel-item-desc" rel="prefetch" href="blog/{slug}">
        <div class="carousel-item-title">
            {@html tags}
        </div>
        <time datatime={date}>📆 {formatIsoTime(date)} - <b>{readingTime(html)}</b></time>
        <h2 class="subtitle">{title}</h2>
    </a>
</article>
<style>
    .carousel-item {
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 70px;
        max-width: 320px;
    }
    .carousel-item-title {
        display: flex;
        align-items: center;
    }
    .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .carousel-item-desc {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 90%;
        padding: 10px;
        background-color: var(--white);
        color: var(--color-text);
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0 2px 4px rgba(0 0 0 /  10%);
        text-decoration: none;
    }
    .subtitle {
        font-size: 2rem;
    }
    time {
        display: flex;
        margin: .5rem 0;
        font-size: var(--size-mintext);
    }
    figure {
        height: 180px;
        overflow: hidden;
        border-radius: 0 0 10px 10px;
    }
</style>