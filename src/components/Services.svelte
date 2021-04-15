<script>
    import icon_ortodoncia from '@static/icon-ortodoncia.svg'
</script>

<section>
    <a href="/">
        <img src="{icon_ortodoncia}" alt="">
        <h2>Ortodoncia</h2>
    </a>
    <a href="/">
        <img src="{icon_ortodoncia}" alt="">
        <h2>Ortodoncia</h2>
    </a>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--gap);
        margin: 2rem 0;
        text-align: center;
        font-size: var(--size-mintext);
    }
    a {
        color: var(--blue);
        font-family: var(--font-maven);
        text-decoration: none;
    }
    img {
        width: 150px;
    }
</style>