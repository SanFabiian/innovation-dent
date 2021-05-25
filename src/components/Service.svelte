<script>
    export let slug
    export let img
</script>
<a href={`blog/${slug}`}>
    <figure><img src="{img}" alt=""></figure>
    <h2>{slug.replace(/-/g ,' ')}</h2>
</a>

<style>
    a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: var(--blue);
        font-family: var(--font-maven);
        text-decoration: none;
        margin: 35px 0;
        width: 100%;
    }
    figure img {
        width: 200px;
        max-width: 220px;
    }
    h2 {
        font-size: var(--size-subtitle);
        text-transform: capitalize;
    }
</style>