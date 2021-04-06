<script>
    import formatIsoTime from '@utils/formatIsoTime.js'
    export let image
    export let tag
    export let date
    export let title
    export let slug
    const tags = tag.map(t => `<div class="${t.slug}">${t.name}</div>`).join('')
</script>
<article class="carousel-item">
    <img src="{image}" alt="">
    <a class="carousel-item-desc" rel="prefetch" href="blog/{slug}">
        <div class="carousel-item-title">
            <p>{@html tags}</p>
            <time datatime={date}>😁 {formatIsoTime(date)}</time>
        </div>
        <h2 class="subtitle">{title}</h2>
    </a>
</article>
<style>
    .carousel-item-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .carousel-item-title p {
        font-size: var(--size-mintext);
        text-transform: capitalize;
    }
    .carousel-item {
        position: relative;
        scroll-snap-align: center;
        width: 90%;
        margin: 0 auto;
        padding-bottom: 60px;
        max-width: 320px;
        min-width: 90%;
    }
    .carousel-item img {
        width: 100%;
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
    time {
        font-size: var(--size-mintext);
    }
</style>